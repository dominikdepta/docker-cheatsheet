# syntax=docker/dockerfile:1

# build
ARG NODE_VERSION=21

FROM node:${NODE_VERSION} as build

WORKDIR /app

COPY . .

RUN npm ci

ENV NODE_ENV production

RUN npm run build

# run
FROM nginx

COPY --from=build /app/public /usr/share/nginx/html/public
COPY --from=build /app/dist /usr/share/nginx/html
