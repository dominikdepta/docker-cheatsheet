# Best Practices

## Use Small Base Images
Start with minimal base images like `alpine` to reduce the overall image size. This improves build times and decreases security vulnerabilities by minimizing unnecessary software packages.

## Leverage Layer Caching
Optimize your Dockerfile to use layer caching. This prevents re-running expensive commands, like installing dependencies, when the rest of the code changes.

```dockerfile
# Copy dependency files first to cache layers
COPY package.json yarn.lock ./
RUN yarn install --production

# Copy the remaining source code
COPY . .
```

## Use Multi-Stage Builds
Multi-stage builds allow you to separate the build and runtime environments. This helps reduce the final image size by only including what is needed to run the application.

```dockerfile
# Build stage
FROM node:18 AS build
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
```

## Avoid Using Root User
Run containers as a non-root user to enhance security and minimize potential risks.

```dockerfile
# Create a non-root user
RUN adduser -D appuser

# Switch to the non-root user
USER appuser

# Proceed with application setup
WORKDIR /app
COPY --chown=appuser:appuser . .
CMD ["node", "src/index.js"]
```

## Exclude Unnecessary Files
Use `.dockerignore` to exclude files and directories that are not needed in the Docker image, reducing build context size and improving build efficiency.

```plaintext
node_modules
.git
build
*.log
```
