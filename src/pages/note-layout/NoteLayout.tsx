import { Navigate, Outlet, useParams } from "react-router-dom";
import { useNoteContext } from "../../context/useNoteContext";

const NoteLayout = () => {
  const { id } = useParams();
  const { noteItems } = useNoteContext();

  const note = noteItems.find((note) => note.id === id);

  if (note === null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
};

export default NoteLayout;
