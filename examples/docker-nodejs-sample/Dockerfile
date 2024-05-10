# syntax=docker/dockerfile:1

ARG NODE_VERSION=21

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY /package*.json ./

COPY /src ./src

RUN npm ci --production

EXPOSE 3000

CMD ["node", "./src/index.js"]
