import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBusinessUserArgs } from "./args/AggregateBusinessUserArgs";
import { BusinessUser } from "../../../models/BusinessUser";
import { AggregateBusinessUser } from "../../outputs/AggregateBusinessUser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BusinessUser)
export class AggregateBusinessUserResolver {
  @TypeGraphQL.Query(_returns => AggregateBusinessUser, {
    nullable: false
  })
  async aggregateBusinessUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBusinessUserArgs): Promise<AggregateBusinessUser> {
    return getPrismaFromContext(ctx).businessUser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
