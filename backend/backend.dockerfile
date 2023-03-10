FROM denoland/deno:alpine-1.29.1

RUN apk add --update nodejs npm

WORKDIR /deno-dir

COPY app .

RUN deno cache deps.ts

RUN deno cache main.ts

RUN chown -R deno:deno /deno-dir

RUN mkdir -p /var/tmp/log

CMD ["run", "--allow-all", "main.ts"]
