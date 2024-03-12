# Best Practices

## Layer caching
Each command in the Dockerfile becomes a new layer in the image. When you make a change to the image, the yarn dependencies have to be reinstalled. It doesn't make much sense to ship around the same dependencies every time you build.
```dockerfile
# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
```

To fix it, you need to restructure your Dockerfile to help support the caching of the dependencies. For Node-based applications, those dependencies are defined in the package.json file. You can copy only that file in first, install the dependencies, and then copy in everything else. Then, you only recreate the yarn dependencies if there was a change to the package.json.
```dockerfile
# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
CMD ["node", "src/index.js"]
```


## Multi-stage builds
Multi-stage builds are an incredibly powerful tool to help use multiple stages to create an image. There are several advantages for them:
- Separate build-time dependencies from runtime dependencies
- Reduce overall image size by shipping only what your app needs to run

```dockerfile
# syntax=docker/dockerfile:1
FROM node:18 AS build
WORKDIR /app
COPY package* yarn.lock ./
RUN yarn install
COPY public ./public
COPY src ./src
RUN yarn run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
```
