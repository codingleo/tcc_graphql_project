import { gql } from 'apollo-server'

const typeDefs = gql`
    type User{
        firstName: String!,
        lastName: String!,
        birthDate: String
    }

    type Query {
        users: [User]
        user(id: ID!): User
    }
`

export default typeDefs
