# syntax=docker/dockerfile:1.4

# --- Builder Stage ---
# Use an official Bun Alpine image from Docker Hub for building
FROM --platform=linux/arm64 oven/bun:alpine AS builder

# Set build argument for the application directory (used for WORKDIR within this stage)
ARG APP_DIR=/app
WORKDIR ${APP_DIR}

# Copy package.json and Bun's lockfile first for better Docker caching
COPY package.json bun.lock* ./

# Install dependencies using Bun
RUN bun install --frozen-lockfile

# Copy the rest of your application code
COPY . .

# Disable Next.js telemetry during the build
ENV NEXT_TELEMETRY_DISABLED=1

# Build the Next.js application
RUN bun run build

# --- Runner Stage ---
# Use a lean Bun Alpine image for the final production container
FROM --platform=linux/arm64 oven/bun:alpine AS runner

# Create a non-root user and group for security best practices
RUN addgroup --system --gid 1001 bunuser && \
    adduser --system --uid 1001 bunuser

# Set environment variables for the application at runtime
ENV PORT=3000
ENV NODE_ENV=production
ENV AWS_LWA_ENABLE_COMPRESSION=true
ENV NEXT_TELEMETRY_DISABLED=1

# Set the working directory for the application in the runner stage
WORKDIR /app

# Copy the AWS Lambda Adapter from AWS ECR Public to the Lambda extensions directory
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.9.1 /lambda-adapter /opt/extensions/lambda-adapter

# Copy the Next.js standalone output from the builder stage
# FIX: Explicitly use /app as the source path, as APP_DIR is not defined in this stage's context for COPY --from
COPY --from=builder /app/.next/standalone ./

# Copy the static assets from the builder stage
# FIX: Explicitly use /app as the source path
COPY --from=builder /app/.next/static ./.next/static

# Create the symlink for cache in /tmp, as /tmp is the only writable directory in Lambda
RUN mkdir -p /tmp/cache && \
    ln -s /tmp/cache ./.next/cache

# Set permissions for the application files and the Lambda Adapter for the non-root user
RUN chown -R bunuser:bunuser /app && \
    chown -R bunuser:bunuser /opt/extensions

# Switch to the non-root user
USER bunuser

# Expose the port your application will listen on
EXPOSE ${PORT}

# Define the command to run your Next.js application using Bun
CMD ["bun", "server.js"]