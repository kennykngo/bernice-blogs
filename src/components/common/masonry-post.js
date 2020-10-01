import React from "react";
import { categoryColors } from "./styles";

export default function MasonryPost({ post, tagsOnTop }) {
  // used to check the height of window
  const windowWidth = window.innerWidth;

  const imageBackground = {
    backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")`,
  };

  const style =
    windowWidth > 900 ? { ...imageBackground, ...post.style } : imageBackground;

  return (
    <a href={post.link} className="masonry-post overlay" style={style}>
      <div
        className="image-text"
        // Allows featured to have tags on top and trending to have tags on bottom
        // on home.js, tagsOnTop is set to true under Featured Posts
        style={{ justifyContent: tagsOnTop ? "space-between" : "flex-end" }}
      >
        <div className="tags-container">
          {post.categories.map((tag, ind) => (
            <span
              key={ind}
              className="tag"
              style={{ backgroundColor: categoryColors[tag] }}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        <div>
          <h2 className="image-title">{post.title}</h2>
          <span className="image-date">{post.date}</span>
        </div>
      </div>
    </a>
  );
}
