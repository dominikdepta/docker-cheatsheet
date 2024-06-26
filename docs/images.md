**Build an image**
```sh
docker build \
  -t <image-name> \
  --build-arg="NODE_VERSION=12" \
  # --target string   Set the target build stage to build
  .
```
Repository name must be a part of the whole tag
```sh
docker build -t <repository>/<image-name>:<image-tag> .
```

**Tag an image**
```sh
docker tag <image-name> <repository>/<image-name>
```

**Push an image**
```sh
docker push <repository>/<image-name>
```

**List images**
```sh
docker images
# -a, --all             Show all images (default hides intermediate images)
```

**Show an image's layers history**
```sh
docker image history <image-name>

IMAGE          CREATED       CREATED BY                                      SIZE      COMMENT
0a785058b0d0   2 days ago    EXPOSE map[3000/tcp:{}]                         0B        buildkit.dockerfile.v0
<missing>      2 days ago    CMD ["node" "src/index.js"]                     0B        buildkit.dockerfile.v0
<missing>      2 days ago    RUN /bin/sh -c yarn install --production # b…   85.3MB    buildkit.dockerfile.v0
<missing>      2 days ago    COPY . . # buildkit                             4.59MB    buildkit.dockerfile.v0
<missing>      2 days ago    WORKDIR /app                                    0B        buildkit.dockerfile.v0
<missing>      3 weeks ago   /bin/sh -c #(nop)  CMD ["node"]                 0B
<missing>      3 weeks ago   /bin/sh -c #(nop)  ENTRYPOINT ["docker-entry…   0B
<missing>      3 weeks ago   /bin/sh -c #(nop) COPY file:4d192565a7220e13…   388B
<missing>      3 weeks ago   /bin/sh -c apk add --no-cache --virtual .bui…   7.77MB
<missing>      3 weeks ago   /bin/sh -c #(nop)  ENV YARN_VERSION=1.22.19     0B
<missing>      3 weeks ago   /bin/sh -c addgroup -g 1000 node     && addu…   117MB
<missing>      3 weeks ago   /bin/sh -c #(nop)  ENV NODE_VERSION=18.19.1     0B
<missing>      6 weeks ago   /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B
<missing>      6 weeks ago   /bin/sh -c #(nop) ADD file:37a76ec18f9887751…   7.38MB
```

**Remove unused images**
```sh
docker image prune
# -a, --all             Remove all unused images, not just dangling ones
```
