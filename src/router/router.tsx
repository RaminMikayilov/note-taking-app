import { Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/test" element={<div>Test</div>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
