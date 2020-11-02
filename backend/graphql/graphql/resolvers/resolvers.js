import { merge } from 'lodash';

// .exec() is used at the end of the GET mongoose queries so it doesn't run twice

const QueryResolvers = {
  Query: {
      message: () => 'Hello World!'
  }
}

import MovieRes from "../../src/resolvers/movies/movies.resolver";

const resolvers = merge(
  QueryResolvers,
  MovieRes
);

export default resolvers;