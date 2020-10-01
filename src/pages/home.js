import React from "react";
import { MasonryPost, PostMasonry, PostGrid } from "../components/common";
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
    post.author = "Bernice Lam";
    post.description =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt ";
  });
};

// want each page to look different to display 9 posts on one page
const recentPosts = [...trending, ...featured, ...featured];

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop();

export default function Home() {
  return (
    <main className="home">
      <section className="container home">
        <div className="row">
          <section className="featured-posts-container">
            <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
            <MasonryPost post={lastFeatured} tagsOnTop={true} />
          </section>
        </div>
      </section>
      <section className="container home">
        <div className="row">
          <h1>Recent Posts</h1>
          <PostGrid posts={recentPosts} />
        </div>
      </section>
      <section className="container home">
        <div className="row">
          {/* Post masonry: give us our wrapper for the masonry css  */}
          <PostMasonry posts={trending} columns={3} />
        </div>
      </section>
    </main>
  );
}
