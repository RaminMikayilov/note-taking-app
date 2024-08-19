import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import { Container } from "react-bootstrap";
import { NoteProvider } from "./context/note.context";

function App() {
  return (
    <NoteProvider>
      <Container className="my-4">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Container>
    </NoteProvider>
  );
}

export default App;
