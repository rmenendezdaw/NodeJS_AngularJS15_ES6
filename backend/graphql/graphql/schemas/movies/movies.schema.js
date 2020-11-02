import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Query {
        movie(slug: String!): Movies!
        movies(limit: Int, offset: Int): [Movie]
    }
    extend type Mutation {
        createMovie(input: MovieInput): Movie
    }
    type Movie {
        slug: String!
        title: String
        description: String
        body: String
        price: String
        category: String
        duration: String
        countFav: String
        author: String
    }

    type MovieInput {
        title: String!
        description: String
        body: String
        price: String
        category: String
        duration: String
    }

`;

export default typeDefs;