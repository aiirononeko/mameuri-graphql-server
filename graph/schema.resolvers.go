package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"mameuri-graphql-server/graph/generated"
	"mameuri-graphql-server/graph/model"
	"mameuri-graphql-server/utils"
	"strconv"
)

// CreateBusinessUser is the resolver for the createBusinessUser field.
func (r *mutationResolver) CreateBusinessUser(ctx context.Context, input model.NewBusinessUsers) (*model.BusinessUser, error) {
	// Validate - email
	if !utils.ValidateEmailString(input.Email) {
		return nil, fmt.Errorf("Error: %s", "email validation error")
	}

	// Validate - password
	if !utils.MatchPasswordString(input.Password) {
		return nil, fmt.Errorf("Error: %s", "password validation error")
	}

	record := model.BusinessUser{
		Email: input.Email,
		Password: input.Password,
	}
	if err := r.DB.Create(&record).Error; err != nil {
		return nil, err
	}

	res := model.NewBusinessUsers(&record)
	return res, nil
}

// UpdateBusinessUser is the resolver for the updateBusinessUser field.
func (r *mutationResolver) UpdateBusinessUser(ctx context.Context, input model.UpdateBusinessUsers) (*model.BusinessUser, error) {
	// Validate - password
	if !utils.MatchPasswordString(input.Password) {
		return nil, fmt.Errorf("Error: %s", "password validation error")
	}

	// TODO USE ORM MAPPER!!!!!!!!!!!!!
	cmd := "UPDATE business_users SET (password) = ($2) WHERE id = $1 RETURNING id, email, password"
	updatedId := ""
	updatedEmail := ""
	updatedPassword := ""
	err := r.DB.QueryRow(cmd, input.ID, input.Password).Scan(&updatedId, &updatedEmail, &updatedPassword)
	if err != nil {
		return nil, err
	}
	businessUser := &model.BusinessUser{
		ID:       updatedId,
		Email:    updatedEmail,
		Password: updatedPassword,
	}
	return businessUser, nil
}

// DeleteBusinessUser is the resolver for the deleteBusinessUser field.
func (r *mutationResolver) DeleteBusinessUser(ctx context.Context, input model.DeleteBusinessUsers) (*model.BusinessUser, error) {
	panic(fmt.Errorf("not implemented: DeleteBusinessUser - deleteBusinessUser"))
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

// UpdateBusinessInfo is the resolver for the updateBusinessInfo field.
func (r *mutationResolver) UpdateBusinessInfo(ctx context.Context, input model.UpdateBusinessInfo) (*model.BusinessInfo, error) {
	panic(fmt.Errorf("not implemented: UpdateBusinessInfo - updateBusinessInfo"))
}

// DeleteBusinessInfo is the resolver for the deleteBusinessInfo field.
func (r *mutationResolver) DeleteBusinessInfo(ctx context.Context, input model.DeleteBusinessInfo) (*model.BusinessInfo, error) {
	panic(fmt.Errorf("not implemented: DeleteBusinessInfo - deleteBusinessInfo"))
}

// CreateProducts is the resolver for the createProducts field.
func (r *mutationResolver) CreateProduct(ctx context.Context, input model.NewProducts) (*model.Product, error) {
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

// UpdateProduct is the resolver for the updateProduct field.
func (r *mutationResolver) UpdateProduct(ctx context.Context, input model.UpdateProducts) (*model.Product, error) {
	panic(fmt.Errorf("not implemented: UpdateProduct - updateProduct"))
}

// DeleteProduct is the resolver for the deleteProduct field.
func (r *mutationResolver) DeleteProduct(ctx context.Context, input model.DeleteProducts) (*model.Product, error) {
	panic(fmt.Errorf("not implemented: DeleteProduct - deleteProduct"))
}

// BusinessUsers is the resolver for the businessUsers field.
func (r *queryResolver) BusinessUsers(ctx context.Context) ([]*model.BusinessUser, error) {
	panic(fmt.Errorf("not implemented: BusinessUsers - businessUsers"))
}

// BusinessInfo is the resolver for the businessInfo field.
func (r *queryResolver) BusinessInfo(ctx context.Context) ([]*model.BusinessInfo, error) {
	panic(fmt.Errorf("not implemented: BusinessInfo - businessInfo"))
}

// Products is the resolver for the products field.
func (r *queryResolver) Products(ctx context.Context) ([]*model.Product, error) {
	panic(fmt.Errorf("not implemented: Products - products"))
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
