import { gql } from 'apollo-server-express';

const Query = gql`
    scalar Date
    type Query {
        message: String
    }
    type Mutation {
        _empty: String
    }
`;

import Company from "./company/company.schema";

const typeDefs = [
    Query,
    Company
];

export default typeDefs;