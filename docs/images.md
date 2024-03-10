**Build an image**
```console
$ docker build -t <image-name> .
```
Repository name must be a part of the whole tag
```console
$ docker build -t <repository>/<image-name>:<image-tag> .
```

**Tag an image**
```console
$ docker tag <image-name> <repository>/<image-name>
```

**Push an image**
```console
$ docker push <repository>/<image-name>
```
