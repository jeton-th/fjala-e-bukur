import { posts } from "app-data/posts";
import { Star } from "@/components/client";
import { Text } from "@/components/server";
import { useEffect } from "react";

export default function Page({
  params: { id: stringId },
}: {
  params: { id: string };
}) {
  const id = parseInt(stringId);
  const post = posts[id];

  if (!post) return null;
  const { title, content, footnotes } = post;

  return (
    <article className="container py-8 min-h-screen bg-white">
      {id > 0 && (
        <div className="flex items-start gap-4 pb-8">
          <h2 className="flex-1 text-3xl font-medium">
            <span>{id}. </span>
            <span>{title}</span>
          </h2>
          <Star id={id} className="size-10 text-neutral-400" />
        </div>
      )}

      <div className="flex flex-col gap-4">
        {content.map(({ type, text }, i) => (
          <Text key={i} type={type} text={text} />
        ))}
      </div>

      {footnotes?.length && (
        <div>
          <hr className="my-8 w-1/2" />
          <ol>
            {footnotes.map((note, i) => (
              <li key={i} className="text-sm leading-6">
                <sup>{i + 1} </sup>
                <span>{note}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}
