import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Creatable from "react-select/creatable";
import { useNoteContext } from "../context/useNoteContext";
import { NoteItemWithoutId, Tag } from "../types/note.type";

type NoteFormProps = {
  onSubmit: (note: NoteItemWithoutId) => void;
  initialTitle?: string;
  initialMarkdown?: string;
  initialTags?: Tag[];
};

const NoteForm = ({
  onSubmit,
  initialTitle = "",
  initialMarkdown = "",
  initialTags = [],
}: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const { addTag } = useNoteContext();
  const [tags, setTags] = useState<Tag[]>(initialTags);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags,
    });

    navigate("..");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                ref={titleRef}
                required
                defaultValue={initialTitle}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <Creatable
                isMulti
                value={tags.map((tag) => ({ value: tag.id, label: tag.label }))}
                options={tags.map((tag) => ({
                  value: tag.id,
                  label: tag.label,
                }))}
                onChange={(tags) =>
                  setTags(
                    tags.map((tag) => ({
                      id: tag.value,
                      label: tag.label,
                    }))
                  )
                }
                onCreateOption={(label) => {
                  const newTag = { id: crypto.randomUUID(), label };
                  addTag(newTag);
                  setTags((prev) => [...prev, newTag]);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control
            ref={markdownRef}
            required
            as="textarea"
            rows={15}
            defaultValue={initialMarkdown}
          />
        </Form.Group>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
