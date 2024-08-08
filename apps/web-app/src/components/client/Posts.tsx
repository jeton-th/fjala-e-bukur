"use client";

import { Star } from "@/components/client";
import { PostType } from "app-data/types";
import Link from "next/link";
import { FunctionComponent, useMemo, useState } from "react";

export const Posts: FunctionComponent<{ posts: PostType[] }> = ({ posts }) => {
  const [searchText, setSearchText] = useState("");

  const filteredPosts = useMemo(
    () =>
      posts.filter(
        ({ title }) =>
          title.toLocaleLowerCase().search(searchText.toLocaleLowerCase()) > -1
      ),
    [posts, searchText]
  );

  return (
    <div className="container flex-1 px-0 bg-white shadow-lg">
      <div className="fixed z-10 bg-white container pt-6 px-20 flex justify-center items-center">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full px-2 py-1 rounded bg-neutral-200 text-center"
          placeholder="Kërko..."
        />
      </div>

      <ul className="pt-16">
        {filteredPosts.map(({ id, title }) => (
          <li key={id} className="relative pr-20">
            <Link href={`post/${id}`}>
              <div className="flex">
                <div className="w-20 flex justify-center items-center text-xl text-neutral-400">
                  {id > 0 && <p>{id}</p>}
                </div>

                <div className="flex-1 flex justify-center items-center h-24 overflow-hidden border-b">
                  <h2 className="flex-1 text-lg line-clamp-2">{title}</h2>
                </div>
              </div>
            </Link>

            <div className="absolute top-9 right-0 w-20 flex justify-center items-center">
              {id > 0 && <Star id={id} className="size-6 text-neutral-400" />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
