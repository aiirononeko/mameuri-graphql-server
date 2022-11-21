import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstBusinessUserArgs } from "./args/FindFirstBusinessUserArgs";
import { BusinessUser } from "../../../models/BusinessUser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BusinessUser)
export class FindFirstBusinessUserResolver {
  @TypeGraphQL.Query(_returns => BusinessUser, {
    nullable: true
  })
  async findFirstBusinessUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBusinessUserArgs): Promise<BusinessUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).businessUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
