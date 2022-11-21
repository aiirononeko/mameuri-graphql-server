import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneBusinessUserArgs } from "./args/CreateOneBusinessUserArgs";
import { BusinessUser } from "../../../models/BusinessUser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BusinessUser)
export class CreateOneBusinessUserResolver {
  @TypeGraphQL.Mutation(_returns => BusinessUser, {
    nullable: false
  })
  async createOneBusinessUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneBusinessUserArgs): Promise<BusinessUser> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).businessUser.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
