import NoteForm from "../components/NoteForm";
import { useNoteContext } from "../context/useNoteContext";

const NewNote = () => {
  const { addNote } = useNoteContext();

  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={addNote} />
    </>
  );
};

export default NewNote;
