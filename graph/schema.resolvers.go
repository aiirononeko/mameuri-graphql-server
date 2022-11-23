package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"mameuri-graphql-server/graph/generated"
	"mameuri-graphql-server/graph/model"
	"math/rand"
	"regexp"
	"strconv"
)

// CreateTodo is the resolver for the createTodo field.
func (r *mutationResolver) CreateTodo(ctx context.Context, input model.NewTodo) (*model.Todo, error) {
	todo := &model.Todo{
		Text:   input.Text,
		ID:     fmt.Sprintf("T%d", rand.Int()),
		User:   &model.User{ID: input.UserID, Name: "user " + input.UserID},
		UserID: input.UserID,
	}
	r.todos = append(r.todos, todo)
	return todo, nil
}

func MatchPasswordString(password string) bool {

	// Must be equal or longer than 8 charactors
	if len(password) < 8 {
		return false
	}
	// Must contain at least each one uppercase, lowercase and number
	reg := []*regexp.Regexp{
		regexp.MustCompile(`[a-z]`), regexp.MustCompile(`[A-Z]`),
		regexp.MustCompile(`\d`),
	}
	for _, r := range reg {
		if r.FindString(password) == "" {
			return false
		}
	}
	return true
}

// CreateBusinessUser is the resolver for the createBusinessUser field.
func (r *mutationResolver) CreateBusinessUser(ctx context.Context, input model.NewBusinessUsers) (*model.BusinessUser, error) {

	// Validate - email
	emailRegexp := regexp.MustCompile(`^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$`)
	if !emailRegexp.MatchString(input.Email) {
		return nil, fmt.Errorf("Error: %s", "email validation error")
	}

	// Validate - password
	if !MatchPasswordString(input.Password) {
		return nil, fmt.Errorf("Error: %s", "password validation error")
	}

	cmd := "INSERT INTO business_users (email, password) VALUES ($1, $2) RETURNING id"
	lastInsertId := 0
	err := r.DB.QueryRow(cmd, input.Email, input.Password).Scan(&lastInsertId)
	if err != nil {
		return nil, err
	}
	businessUser := &model.BusinessUser{
		ID:       strconv.Itoa(lastInsertId),
		Email:    input.Email,
		Password: input.Password,
	}
	r.businessUsers = append(r.businessUsers, businessUser)
	return businessUser, nil
}

// Todos is the resolver for the todos field.
func (r *queryResolver) Todos(ctx context.Context) ([]*model.Todo, error) {
	return r.todos, nil
}

// BusinessUsers is the resolver for the businessUsers field.
func (r *queryResolver) BusinessUsers(ctx context.Context) ([]*model.BusinessUser, error) {
	return r.businessUsers, nil
}

// User is the resolver for the user field.
func (r *todoResolver) User(ctx context.Context, obj *model.Todo) (*model.User, error) {
	return &model.User{ID: obj.UserID, Name: "user " + obj.UserID}, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

// Todo returns generated.TodoResolver implementation.
func (r *Resolver) Todo() generated.TodoResolver { return &todoResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type todoResolver struct{ *Resolver }
