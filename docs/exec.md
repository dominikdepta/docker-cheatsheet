
# Docker Exec

## `docker exec`
Executes a command in a running container.

```sh
docker exec <container_id> <command> [ARG...] # Execute a command in a running container
```

### Options:

- `-d, --detach`
  Run the command in the background (detached mode).
  ```sh
  docker exec -d <container_id> <command>
  ```

- `--detach-keys`
  Override the key sequence for detaching a container.
  ```sh
  docker exec --detach-keys <key_sequence> <container_id> <command>
  ```

- `-e, --env`
  Set environment variables.
  ```sh
  docker exec -e <key>=<value> <container_id> <command>
  ```

- `--env-file`
  Read environment variables from a file.
  ```sh
  docker exec --env-file <file> <container_id> <command>
  ```

- `-i, --interactive`
  Keep STDIN open even if not attached.
  ```sh
  docker exec -i <container_id> <command>
  ```

- `--privileged`
  Give extended privileges to the command.
  ```sh
  docker exec --privileged <container_id> <command>
  ```

- `-t, --tty`
  Allocate a pseudo-TTY.
  ```sh
  docker exec -t <container_id> <command>
  ```

- `-u, --user`
  Specify the username or UID (format: "<name|uid>[:<group|gid>]").
  ```sh
  docker exec -u <user> <container_id> <command>
  ```

- `-w, --workdir`
  Set the working directory inside the container.
  ```sh
  docker exec -w <directory> <container_id> <command>
  ```
