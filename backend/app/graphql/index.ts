import { schema } from "./schema.ts";
import {
    Router,
    Middleware,
    createYoga
} from "../deps.ts";

const yoga = createYoga({ schema });

const handleGraphQL: Middleware = async (ctx) => {
    // cast Oak request into a normal Request
    const req = new Request(ctx.request.url.toString(), {
        body: ctx.request.originalRequest.getBody().body,
        headers: ctx.request.headers,
        method: ctx.request.method,
    });

    const res = await yoga.handle(req);

    res.headers.forEach((v, k) => ctx.response.headers.append(k, v));

    ctx.response.status = res.status;
    ctx.response.body = res.body;
};

// Allow CORS:
// const cors: Middleware = (ctx) => {
// ctx.response.headers.append('access-control-allow-origin', '*')
// ctx.response.headers.append('access-control-allow-headers', 'Origin, Host, Content-Type, Accept')
// }

export const graphqlRouter = new Router().all("/graphql", handleGraphQL);
