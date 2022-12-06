package main

import (
	"fmt"
	"log"
	"mameuri-graphql-server/graph"
	"mameuri-graphql-server/graph/generated"
	"mameuri-graphql-server/graph/model"
	"net/http"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
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

	var connectionString string = fmt.Sprintf("host=%s user=%s password=%s dbname=%s sslmode=disable", HOST, USER, PASSWORD, DATABASE)

	// Initialize connection object.
	db, err := gorm.Open(postgres.Open(connectionString), &gorm.Config{})
	if err != nil {
		panic("faild to connect database")
	}

	err = db.AutoMigrate(&model.BusinessUser{}, &model.BusinessInfo{}, &model.Product{})
	if err != nil {
		panic("")
	}

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{DB: db}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
