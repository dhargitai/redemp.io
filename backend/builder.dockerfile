FROM denoland/deno:alpine-1.29.1

RUN apk add --update nodejs npm

WORKDIR /deno-dir

COPY app .

RUN chown -R deno:deno /deno-dir

CMD ["run", "--allow-all", "--unstable", "npm:prisma@^4.8", "generate", "--data-proxy"]
