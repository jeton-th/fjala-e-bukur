export interface PostType {
  id: string;
  title: string;
  content: ParagraphType[];
}

export interface ParagraphType {
  text: string;
  type: "text" | "quote" | "reference";
}
