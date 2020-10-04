// where we keep our resolvers
const trendingPosts = require("./mocks/trending");
const featuredPosts = require("./mocks/featured");
const fs = require("fs");
const path = require("path");

module.exports = {
  resolvers: {
    Query: {
      trendingPosts: () => trendingPosts,
      featuredPosts: () => featuredPosts,
      recentPosts: () => [...trendingPosts, ...featuredPosts, ...featuredPosts],
    },
  },

  schema: fs
    .readFileSync(path.resolve(__dirname, "./posts-schema.graphql"))
    .toString(),
  // provides us with our graphql string that app.js file to use to make executable schemas
};
