import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { useNote } from "./note-layout/hooks/useNote";
import { Link, useNavigate } from "react-router-dom";
import { useNoteContext } from "../context/useNoteContext";

const Note = () => {
  const note = useNote();
  const navigate = useNavigate();
  const { deleteNote } = useNoteContext();

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {note.tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button
              onClick={() => {
                deleteNote(note.id);
                navigate("/");
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
            <Link to="/">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{note.markdown}</p>
        </Col>
      </Row>
    </>
  );
};

export default Note;
