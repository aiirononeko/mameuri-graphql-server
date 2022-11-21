import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBusinessUserOrThrowArgs } from "./args/FindUniqueBusinessUserOrThrowArgs";
import { BusinessUser } from "../../../models/BusinessUser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BusinessUser)
export class FindUniqueBusinessUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => BusinessUser, {
    nullable: true
  })
  async getBusinessUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBusinessUserOrThrowArgs): Promise<BusinessUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).businessUser.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
