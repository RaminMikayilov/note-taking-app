import NoteForm from "../components/NoteForm";
import { useNoteContext } from "../context/useNoteContext";
import { useNote } from "./note-layout/hooks/useNote";

const EditNote = () => {
  const note = useNote();
  const { updateNote } = useNoteContext();

  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        onSubmit={(data) => {
          updateNote(note.id, data);
        }}
        initialTitle={note.title}
        initialMarkdown={note.markdown}
        initialTags={note.tags}
      />
    </>
  );
};

export default EditNote;
