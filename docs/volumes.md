# Volumes

## Working with volumes
Docker isolates all content, code, and data in a container from your local filesystem. When you delete a container, Docker deletes all the content within that container.

Sometimes, you may want to persist the data that a container generates. To do this, you can use volumes.

```yaml
todo-database:
    # ...
    volumes:
      - database:/data/db

# ...
volumes:
  database:
```

**Create a volume**
```sh
docker volume create my-vol
```

**List volumes**
```sh
docker volume ls
```

**Inspect a volume**
```sh
docker volume inspect my-vol
[
    {
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/my-vol/_data",
        "Name": "my-vol",
        "Options": {},
        "Scope": "local"
    }
]
```

**Mount a volume**
```sh
docker run -d \
  --name devtest \
  --mount source=myvol2,target=/app \
  nginx:latest
```

**Remove a volume**
```sh
docker volume rm myvol2
```

## Using bind mounts
```yaml
todo-app:
    # ...
    volumes:
      - ./app:/usr/src/app
      - /usr/src/app/node_modules
```

The volumes element tells Compose to mount the local folder `./app to /usr/src/app` in the container for the todo-app service. This particular bind mount overwrites the static contents of the `/usr/src/` app directory in the container and creates what is known as a development container. The second instruction, `/usr/src/app/node_modules`, prevents the bind mount from overwriting the container's `node_modules` directory to preserve the packages installed in the container.
