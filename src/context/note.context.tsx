import { createContext, ReactNode } from "react";
import { NoteItem, NoteItemWithoutId, Tag } from "../types/note.type";
import { useLocalStorage } from "../hooks/useLocalStorage";

type NoteProviderProps = {
  children: ReactNode;
};

type NoteContext = {
  noteItems: NoteItem[];
  addNote: (data: NoteItem) => void;
  updateNote: (id: string, data: NoteItemWithoutId) => void;
  tags: Tag[];
  addTag: (data: Tag) => void;
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

  function addTag(data: Tag) {
    setTags((prev) => [...prev, data]);
  }

  return (
    <NoteContext.Provider
      value={{
        noteItems,
        addNote,
        updateNote,
        tags,
        addTag,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
