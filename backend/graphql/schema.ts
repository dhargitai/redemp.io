
import { makeExecutableSchema, gql } from "../deps.ts";
import { resolvers } from "./resolvers.ts";

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

export const schema = makeExecutableSchema({ resolvers, typeDefs });
