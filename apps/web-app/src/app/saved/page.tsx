"use client";

import { Posts } from "@/components/client";
import { posts as allPosts } from "app-data/posts";
import { useSavedPosts } from "hooks/src/context";

export default function Home() {
  const { savedPosts } = useSavedPosts();
  const posts = allPosts.filter(({ id }) => savedPosts.includes(id));

  return <Posts posts={posts} />;
}
