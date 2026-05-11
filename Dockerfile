# syntax=docker/dockerfile:1.7

# One Dockerfile is shared by local and production Compose files.
# The final image runs Next.js standalone output instead of full node_modules.

FROM node:22-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
# libc6-compat is commonly needed by native npm packages on Alpine.
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
RUN apk add --no-cache libc6-compat
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Run as a non-root user in production.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Next standalone output contains server.js and traced runtime dependencies.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# These folders are not copied into standalone automatically, but server.js can serve them.
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]

