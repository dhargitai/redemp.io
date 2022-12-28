import { Application, Router, Middleware } from "./deps.ts";
import { graphqlRouter } from "./graphql/index.ts";

const app = new Application().use(
    // cors,
    graphqlRouter.routes(),
    graphqlRouter.allowedMethods()
);

app.addEventListener("listen", ({ secure, hostname, port }) => {
    if (hostname === "0.0.0.0") hostname = "localhost";

    const protocol = secure ? "https" : "http";
    const url = `${protocol}://${hostname ?? "localhost"}:${port}`;

    console.log("☁  Started on " + url);
});

await app.listen({ port: 3000 });
