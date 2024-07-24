export interface PostType {
  id: number;
  title: string;
  content: PostContentType[];
}

export interface PostContentType {
  type: TextType;
  text: string;
}

export type TextType = "title" | "latin" | "ayah" | "dhikr";
