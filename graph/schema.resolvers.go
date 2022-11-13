package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"strconv"

	"github.com/aiirononeko/mameuri-graphql-server/graph/generated"
	"github.com/aiirononeko/mameuri-graphql-server/graph/model"
)

var businessUsers []*model.BusinessUser = make([]*model.BusinessUser, 0)

// CreateBusinessUser is the resolver for the createBusinessUser field.
func (r *mutationResolver) CreateBusinessUser(ctx context.Context, email string, password string) (*model.BusinessUser, error) {
	businessUser := model.BusinessUser{
		ID:       fmt.Sprintf("%d", len(businessUsers)+1),
		Email:    email,
		Password: password,
	}
	businessUsers = append(businessUsers, &businessUser)
	return &businessUser, nil
}

// UpdateBusinessUser is the resolver for the updateBusinessUser field.
func (r *mutationResolver) UpdateBusinessUser(ctx context.Context, id *string, password string) (*model.BusinessUser, error) {
	if password == "" {
		return nil, nil
	}
	i, _ := strconv.Atoi(*id)
	businessUsers[i-1].Password = password
	return businessUsers[i-1], nil
}

// DeleteBusinessUser is the resolver for the deleteBusinessUser field.
func (r *mutationResolver) DeleteBusinessUser(ctx context.Context, id *string, password string) (*model.BusinessUser, error) {
	if password == "" {
		return nil, nil
	}
	i, _ := strconv.Atoi(*id)
	businessUsers = businessUsers[:i-1+copy(businessUsers[i-1:], businessUsers[i:])] // TODO: Errorになるため修正が必要
	return businessUsers[i-1], nil
}

func (r *queryResolver) AllBusinessUsers(ctx context.Context, orderBy *model.OrderBy, first int, skip int) ([]*model.BusinessUser, error) {
	return businessUsers, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
