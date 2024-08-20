import { Button, Col, Modal, Row, Stack, Form } from "react-bootstrap";
import { useNoteContext } from "../context/useNoteContext";

type EditTagsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const EditTagsModal = ({ isOpen, onClose }: EditTagsModalProps) => {
  const { tags, updateTag, deleteTag } = useNoteContext();

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {tags.length > 0 ? (
              tags.map((tag) => (
                <Row key={tag.id}>
                  <Col>
                    <Form.Control
                      type="text"
                      value={tag.label}
                      onChange={(e) => updateTag(tag.id, e.target.value)}
                    />
                  </Col>
                  <Col xs="auto">
                    <Button
                      onClick={() => deleteTag(tag.id)}
                      variant="outline-danger"
                    >
                      &times;
                    </Button>
                  </Col>
                </Row>
              ))
            ) : (
              <p>No tags available. Add some tags to start editing.</p>
            )}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTagsModal;
