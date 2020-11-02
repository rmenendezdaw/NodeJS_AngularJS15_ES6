import { gql } from 'apollo-server-express';

const Query = gql`
    scalar Date
    extend type Query {
        message: String
    }
    type Mutation {
        _empty: String
    }
`;

import Movie from "../../src/schemas/movies/movies.schema";

const typeDefs = [
    Query,
    Movie
];

export default typeDefs;