package graph

import (
	"database/sql"

	"mameuri-graphql-server/graph/model"

	_ "github.com/lib/pq"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	DB            *sql.DB
	businessUsers []*model.BusinessUser
}
