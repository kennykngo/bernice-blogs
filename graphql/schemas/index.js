const postsSchema = require("./posts");

const resolvers = [postsSchema.resolvers];

const typeDefs = [postsSchema.schema];

module.export = {
  resolvers,
  typeDefs,
};
