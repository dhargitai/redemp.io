FROM denoland/deno:alpine-1.29.1

WORKDIR /app

USER deno

COPY deps.ts .

RUN deno cache deps.ts

COPY . .

RUN deno cache main.ts

RUN mkdir -p /var/tmp/log

CMD ["run", "--allow-all", "main.ts"]
