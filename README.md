# How to start server
execute command below
```
go run server.go
```

# How to update DB Schema
1. Modify shema.graphqls file
2. execute command below
  ```
  rm graph/schema.resolvers.go
  ```
3. execute command below
  ```
  go run github.com/99designs/gqlgen@v0.17.20
  ```
