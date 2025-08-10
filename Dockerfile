FROM oven/bun:alpine AS builder

ARG APP_DIR=/app
WORKDIR ${APP_DIR}

COPY package.json bun.lock* ./

RUN bun install --frozen-lockfile

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run build

FROM oven/bun:alpine AS runner

RUN apk update && apk add --no-cache shadow && \
    addgroup --system --gid 1001 bunuser && \
    adduser --system --uid 1001 bunuser

ENV PORT=3000
ENV NODE_ENV=production
ENV AWS_LWA_ENABLE_COMPRESSION=true
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.9.1 /lambda-adapter /opt/extensions/lambda-adapter

COPY --from=builder /app/.next/standalone ./

COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/public ./public

RUN mkdir -p /tmp/cache && \
    ln -s /tmp/cache ./.next/cache

RUN chown -R bunuser:bunuser /app && \
    chown -R bunuser:bunuser /opt/extensions

USER bunuser

EXPOSE ${PORT}

CMD ["bun", "server.js"]