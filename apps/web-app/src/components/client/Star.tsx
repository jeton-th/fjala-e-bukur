"use client";

import { FunctionComponent, HTMLProps, useCallback, useMemo } from "react";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";
import { useSavedPosts } from "hooks/src/context";
import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid";
import { PostType } from "app-data/types";

export const Star: FunctionComponent<
  Pick<HTMLProps<HTMLElement>, "className"> & Pick<PostType, "id">
> = ({ id, className }) => {
  const { savedPosts, savePost, removePost } = useSavedPosts();

  const isPostSaved = useMemo(() => savedPosts.includes(id), [id, savedPosts]);

  const togglePostSave = useCallback(
    () => (isPostSaved ? removePost(id) : savePost(id)),
    [id, isPostSaved, removePost, savePost]
  );

  return (
    <button type="button" onClick={togglePostSave}>
      {isPostSaved ? (
        <StarSolidIcon className={`${className} text-yellow-400`} />
      ) : (
        <StarOutlineIcon className={className} />
      )}
    </button>
  );
};
