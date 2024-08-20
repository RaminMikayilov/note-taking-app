import { createContext, ReactNode } from "react";
import { NoteItem, NoteItemWithoutId, Tag } from "../types/note.type";
import { useLocalStorage } from "../hooks/useLocalStorage";

type NoteProviderProps = {
  children: ReactNode;
};

type NoteContext = {
  noteItems: NoteItem[];
  addNote: (data: NoteItemWithoutId) => void;
  updateNote: (id: string, data: NoteItemWithoutId) => void;
  deleteNote: (id: string) => void;
  tags: Tag[];
  addTag: (data: Tag) => void;
  updateTag: (id: string, label: string) => void;
  deleteTag: (id: string) => void;
};

export const NoteContext = createContext({} as NoteContext);

export function NoteProvider({ children }: NoteProviderProps) {
  const [noteItems, setNoteItems] = useLocalStorage<NoteItem[]>("notes", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("tags", []);

  function addNote(data: NoteItemWithoutId) {
    setNoteItems((prev) => [...prev, { ...data, id: crypto.randomUUID() }]);
  }

  function updateNote(id: string, data: NoteItemWithoutId) {
    setNoteItems((prev) =>
      prev.map((note) => (note.id === id ? { ...note, ...data } : note))
    );
  }

  function deleteNote(id: string) {
    setNoteItems((prev) => prev.filter((note) => note.id !== id));
  }

  function addTag(data: Tag) {
    setTags((prev) => [...prev, data]);
  }

  function updateTag(id: string, label: string) {
    setTags((prev) =>
      prev.map((tag) => (tag.id === id ? { ...tag, label } : tag))
    );

    setNoteItems((prev) =>
      prev.map((note) => ({
        ...note,
        tags: note.tags.map((tag) => (tag.id === id ? { ...tag, label } : tag)),
      }))
    );
  }

  function deleteTag(id: string) {
    setTags((prev) => prev.filter((tag) => tag.id !== id));

    setNoteItems((prev) =>
      prev.map((note) => ({
        ...note,
        tags: note.tags.filter((tag) => tag.id !== id),
      }))
    );
  }

  return (
    <NoteContext.Provider
      value={{
        noteItems,
        addNote,
        updateNote,
        deleteNote,
        tags,
        addTag,
        updateTag,
        deleteTag,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
