**Copy a file to a container**
```sh
docker cp ./file.conf CONTAINER:/app
```

**Copy a file from a container**
```sh
docker cp CONTAINER:/app/file.conf ./
# or
docker run --rm -i --entrypoint=cat nginx /etc/nginx/nginx.conf > ./nginx.conf
```

**Mount a (configuration) file**
```sh
docker run -v ./nginx.conf:/etc/nginx/nginx.conf:ro -d nginx
```
