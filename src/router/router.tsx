import { Navigate, Route, Routes } from "react-router-dom";
import NewNote from "../components/NewNote";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/:id">
        <Route index element={<div>Details</div>} />
        <Route path="edit" element={<div>Edit</div>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
