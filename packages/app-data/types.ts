export interface PostType {
  id: number;
  title: string;
  content: ParagraphType[];
}

export interface ParagraphType {
  text: string;
  type: "text" | "quote" | "reference";
}
