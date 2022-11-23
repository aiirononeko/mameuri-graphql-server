package main

import (
	"database/sql"
	"fmt"
	"log"
	"mameuri-graphql-server/graph"
	"mameuri-graphql-server/graph/generated"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	_ "github.com/lib/pq"
)

const (
	HOST         = "127.0.0.1"
	DATABASE     = "mameuri_dev"
	USER         = "postgres"
	PASSWORD     = "postgres"
	DEFAULT_PORT = "8080"
)

func checkError(err error) {
	if err != nil {
		panic(err)
	}
}

func main() {

	port := os.Getenv("PORT")
	if port == "" {
		port = DEFAULT_PORT
	}

	// Initialize connection string.
	var connectionString string = fmt.Sprintf("host=%s user=%s password=%s dbname=%s sslmode=disable", HOST, USER, PASSWORD, DATABASE)

	// Initialize connection object.
	db, err := sql.Open("postgres", connectionString)
	checkError(err)

	err = db.Ping()
	checkError(err)
	fmt.Println("Successfully created connection to database")

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
