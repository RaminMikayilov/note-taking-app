import { createContext, ReactNode, useState } from "react";
import { NoteItem } from "../types/note.type";
// import { useLocalStorage } from "../hooks/useLocalStorage";

type NoteProviderProps = {
  children: ReactNode;
};

type NoteContext = {
  noteItems: NoteItem[];
  addNote: (data: NoteItem) => void;
};

export const NoteContext = createContext({} as NoteContext);

export function NoteProvider({ children }: NoteProviderProps) {
  // const [noteItems, setNoteItems] = useLocalStorage<NoteItem[]>("notes", []);
  const [noteItems, setNoteItems] = useState<NoteItem[]>([]);

  function addNote(data: NoteItem) {
    setNoteItems((prev) => [...prev, data]);
  }

  return (
    <NoteContext.Provider
      value={{
        noteItems,
        addNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
