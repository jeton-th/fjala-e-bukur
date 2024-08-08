import { Posts } from "@/components/client";
import { posts } from "app-data/posts";

export default function Home() {
  return <Posts posts={posts} />;
}
