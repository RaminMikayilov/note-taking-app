import { Navigate, Route, Routes } from "react-router-dom";
import NewNote from "../pages/NewNote";
import NoteList from "../pages/NoteList";
import EditNote from "../pages/EditNote";
import NoteLayout from "../pages/note-layout/NoteLayout";
import Note from "../pages/Note";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<NoteList />} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/:id" element={<NoteLayout />}>
        <Route index element={<Note />} />
        <Route path="edit" element={<EditNote />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
