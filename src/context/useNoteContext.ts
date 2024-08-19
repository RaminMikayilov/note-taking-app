import { useContext } from "react";
import { NoteContext } from "./note.context";

export function useNoteContext() {
    return useContext(NoteContext);
}