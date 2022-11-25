package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"mameuri-graphql-server/graph/generated"
	"mameuri-graphql-server/graph/model"
	"mameuri-graphql-server/utils"
	"regexp"
	"strconv"
)

// CreateBusinessUser is the resolver for the createBusinessUser field.
func (r *mutationResolver) CreateBusinessUser(ctx context.Context, input model.NewBusinessUsers) (*model.BusinessUser, error) {
	// Validate - email
	emailRegexp := regexp.MustCompile(`^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$`)
	if !emailRegexp.MatchString(input.Email) {
		return nil, fmt.Errorf("Error: %s", "email validation error")
	}

	// Validate - password
	if !utils.MatchPasswordString(input.Password) {
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

// CreateBusinessInfo is the resolver for the createBusinessInfo field.
func (r *mutationResolver) CreateBusinessInfo(ctx context.Context, input model.NewBusinessInfo) (*model.BusinessInfo, error) {
	// Validate - name

	// Validate - description

	cmd := "INSERT INTO business_info (user_id, name, description, address) VALUES ($1, $2, $3) RETURNING id"
	lastInsertId := 0
	err := r.DB.QueryRow(cmd, input.UserID, input.Name, input.Description).Scan(&lastInsertId)
	if err != nil {
		return nil, err
	}
	businessInfo := &model.BusinessInfo{
		ID:          strconv.Itoa(lastInsertId),
		UserID:      input.UserID,
		Name:        input.Name,
		Description: input.Description,
	}
	r.businessInfo = append(r.businessInfo, businessInfo)
	return businessInfo, nil
}

// CreateProducts is the resolver for the createProducts field.
func (r *mutationResolver) CreateProducts(ctx context.Context, input model.NewProducts) (*model.Product, error) {
	// Validate - name

	// Validate - description

	// Validate - price

	cmd := "INSERT INTO products (business_id, name, description, price) VALUES ($1, $2, $3, $4) RETURNING id"
	lastInsertId := 0
	err := r.DB.QueryRow(cmd, input.BusinessID, input.Name, input.Description, input.Price).Scan(&lastInsertId)
	if err != nil {
		return nil, err
	}
	product := &model.Product{
		ID:          strconv.Itoa(lastInsertId),
		BusinessID:  input.BusinessID,
		Name:        input.Name,
		Description: input.Description,
		Price:       input.Price,
	}
	r.products = append(r.products, product)
	return product, nil
}

// BusinessUsers is the resolver for the businessUsers field.
func (r *queryResolver) BusinessUsers(ctx context.Context) ([]*model.BusinessUser, error) {
	return r.businessUsers, nil // TODO
}

// BusinessInfo is the resolver for the businessInfo field.
func (r *queryResolver) BusinessInfo(ctx context.Context) ([]*model.BusinessInfo, error) {
	return r.businessInfo, nil // TODO
}

// Products is the resolver for the products field.
func (r *queryResolver) Products(ctx context.Context) ([]*model.Product, error) {
	return r.products, nil // TODO
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
