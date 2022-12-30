import { schema } from "./schema.ts";
import {
    Router,
    Middleware,
    GraphQLHTTP,
} from "../deps.ts";

const resolve = GraphQLHTTP({
    schema,
    graphiql: true,
    context: (request) => ({ request }),
});

const handleGraphQL: Middleware = async (ctx) => {
    // cast Oak request into a normal Request
    const req = new Request(ctx.request.url.toString(), {
        body: ctx.request.originalRequest.getBody().body,
        headers: ctx.request.headers,
        method: ctx.request.method,
    });

    const res = await resolve(req);

    for (const [k, v] of res.headers.entries())
        ctx.response.headers.append(k, v);

    ctx.response.status = res.status;
    ctx.response.body = res.body;
};

// Allow CORS:
// const cors: Middleware = (ctx) => {
// ctx.response.headers.append('access-control-allow-origin', '*')
// ctx.response.headers.append('access-control-allow-headers', 'Origin, Host, Content-Type, Accept')
// }

export const graphqlRouter = new Router().all("/graphql", handleGraphQL);
