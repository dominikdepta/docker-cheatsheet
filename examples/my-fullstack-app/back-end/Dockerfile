# syntax=docker/dockerfile:1

ARG NODE_VERSION=21

# base
FROM node:${NODE_VERSION}-alpine as base

# build
FROM base AS build

WORKDIR /app

COPY . .

RUN npm ci

ENV NODE_ENV production

RUN npm run build

# prod dependencies
FROM base as prod-dependencies

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

# run
FROM base as run

WORKDIR /app

COPY --from=build /app/dist ./
COPY --from=prod-dependencies /app/node_modules ./node_modules

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["node", "./server.js"]
