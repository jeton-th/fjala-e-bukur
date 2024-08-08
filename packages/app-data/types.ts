export interface PostType {
  id: number;
  title: string;
  content: PostContentType[];
  footnotes?: string[];
}

export interface PostContentType {
  type: TextType;
  text: string;
}

export type TextType = "title" | "latin" | "ayah" | "quote";
