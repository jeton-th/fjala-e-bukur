import { posts } from "app-data/posts";
import { Star } from "@/components/client";
import { Text } from "@/components/server";

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

      <div className="main-text flex flex-col gap-4">
        {content.map(({ type, text }, i) => (
          <Text
            key={i}
            type={type}
            text={text.replace(
              /<sup>(\d+)<\/sup>/gm,
              `<a href="#note$1" class="link"><sup>[$1]</sup></a>`
            )}
          />
        ))}
      </div>

      {footnotes?.length && (
        <div>
          <hr className="my-8 w-1/2" />
          <ol className="mx-8">
            {footnotes.map((note, i) => (
              <li
                key={i + 1}
                id={`note${i + 1}`}
                className="text-sm leading-6 list-decimal"
              >
                {note}
              </li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}
