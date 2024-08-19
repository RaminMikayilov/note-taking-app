import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="my-4">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Container>
  );
}

export default App;
