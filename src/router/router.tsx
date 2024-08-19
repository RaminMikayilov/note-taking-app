import { Navigate, Route, Routes } from "react-router-dom";
import NewNote from "../pages/NewNote";
import NoteLayout from "../pages/noteLayout";
import NoteList from "../pages/NoteList";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<NoteList />} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/:id">
        <Route index element={<NoteLayout />} />
        <Route path="edit" element={<div>Edit</div>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
