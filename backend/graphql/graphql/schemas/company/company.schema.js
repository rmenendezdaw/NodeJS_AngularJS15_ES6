import { gql } from 'apollo-server-express';

const typeDefs = gql`
    extend type Query {
        company(slug: String!): Company
        companies: [Company]
    }
    extend type Mutation {
        createCompany(input: CompanyInput): Company
    }
    type Company {
        id: ID!
        slug: String!
        title: String
        platform: String
        description: String
        countFav: String
    }

    input CompanyInput {
        title: String!
        platform: String
        description: String
    }

`;

export default typeDefs;