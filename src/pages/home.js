import React from "react";
import { PostMasonry } from "../components/common";
import trending from "../assets/mocks/trending";

// SEPARATION OF CONCERNS - Front end stuff from front and backend from back
// have a configuration for each css grid
// then merge that configuration with the post object
const trendingConfig = {
  // css grid
  1: {
    gridArea: "1 / 2/ 3 /3",
  },
};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    // If index exists, assign value to post from masonry-post.js
    // merging styles
    post.style = config[index];
  });
};

mergeStyles(trending, trendingConfig);

export default function Home() {
  return (
    <section className="container home">
      <div className="row">
        <h2> Trending Posts</h2>
        {/* Post masonry: give us our wrapper for the masonry css  */}
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  );
}
