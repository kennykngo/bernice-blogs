import React from "react";
import { MasonryPost } from "./";

export default function PostMasonry({ posts, columns, tagsOnTop }) {
  return (
    <section
      className="masonry"
      // repeat for the total number of columns
      // min 275px, max 1fr (however big the image can be)
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))` }}
    >
      {posts.map((
        post,
        index // Rather than this prop = etc., you have an object and destructure another object (short hand for passing props)
      ) => (
        <MasonryPost {...{ post, index, tagsOnTop, key: index }} />
      ))}
    </section>
  );
}
