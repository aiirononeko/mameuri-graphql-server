# How to start server
execute command below
```
go run server.go
```

# How to update DB Schema
1. Modify shema.graphqls file
2. execute command below
  ```
  go run github.com/99designs/gqlgen generate
  ```

# How to setup DB
- Connect
  ```
  psql -d mameuri_dev -U postgres;
  ```
- Create Database
  ```
  CREATE DATABASE mameuri_dev;
  ```
- Create Table
  ```
  CREATE TABLE business_users (id serial PRIMARY KEY, email VARCHAR(50) NOT NULL UNIQUE, password VARCHAR(50) NOT NULL);
  ```
