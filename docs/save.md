**Save an image to a tar archive**
```sh
docker save <image> | gzip > <file>.tar.gz
```

**Load an image from a tar archive**
```sh
docker load < <file>.tar.gz
```
