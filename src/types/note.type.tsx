export type NoteItem = {
  id: string;
  title: string;
  tags: Tag[];
  markdown: string;
};

export type Tag = {
  id: string;
  label: string;
};
