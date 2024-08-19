import { createContext, ReactNode } from "react";
import { NoteItem, Tag } from "../types/note.type";
import { useLocalStorage } from "../hooks/useLocalStorage";

type NoteProviderProps = {
  children: ReactNode;
};

type NoteContext = {
  noteItems: NoteItem[];
  addNote: (data: NoteItem) => void;
  tags: Tag[];
  addTag: (data: Tag) => void;
};

export const NoteContext = createContext({} as NoteContext);

export function NoteProvider({ children }: NoteProviderProps) {
  const [noteItems, setNoteItems] = useLocalStorage<NoteItem[]>("notes", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("tags", []);

  function addNote(data: NoteItem) {
    setNoteItems((prev) => [...prev, data]);
  }

  function addTag(data: Tag) {
    setTags((prev) => [...prev, data]);
  }

  return (
    <NoteContext.Provider
      value={{
        noteItems,
        addNote,
        tags,
        addTag,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
