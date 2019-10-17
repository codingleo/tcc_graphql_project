import { gql } from 'apollo-server'

const typeDefs = gql`
    type User{
        id: ID!,
        firstName: String!,
        lastName: String!,
        birthDate: String,
        address: String!,
        country: String!,
        city: String!,
        address2: String,
    }

    type Query {
        users: [User]
        user(id: ID!): User
    }

    input UserInput {
        firstName: String!
        lastName: String!
        address: String
        country: String
        city: String
        address2: String
    }

    type Mutation {
        newUser(input: UserInput!): User
        updateUser(id: ID!, input: UserInput!): User
    }
`

export default typeDefs
