import React from "react";
import { MasonryPost, PostMasonry } from "../components/common";
import trending from "../assets/mocks/trending";
import featured from "../assets/mocks/featured";

// SEPARATION OF CONCERNS - Front end stuff from front and backend from back
// have a configuration for each css grid
// then merge that configuration with the post object
const trendingConfig = {
  // css grid
  1: {
    gridArea: "1 / 2/ 3 /3",
  },
};

const featuredConfig = {
  0: {
    gridArea: "1/ 1/ 2/ 3",
    height: "300px",
  },
  1: {
    height: "300px",
  },
  3: {
    height: "630px",
    marginLeft: "30px",
    width: "630px",
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
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop();

export default function Home() {
  return (
    <section className="container home">
      <div className="row">
        <h1> Featured Posts</h1>
        <section className="featured-post-container">
          <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
          <MasonryPost post={lastFeatured} tagsOnTop={true} />
        </section>
        <h1> Trending Posts</h1>
        {/* Post masonry: give us our wrapper for the masonry css  */}
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  );
}
