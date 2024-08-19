export type NoteItem = {
  id: number;
  title: string;
  tags: Tag[];
  markdown: string;
};

export type Tag = {
  id: number;
  label: string;
};
