import { useOutletContext } from "react-router-dom";
import { NoteItem } from "../../../types/note.type";

export const useNote = () => {
    return useOutletContext<NoteItem>();
};
