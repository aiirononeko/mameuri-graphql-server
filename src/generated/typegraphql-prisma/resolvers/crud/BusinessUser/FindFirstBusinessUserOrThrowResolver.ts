import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstBusinessUserOrThrowArgs } from "./args/FindFirstBusinessUserOrThrowArgs";
import { BusinessUser } from "../../../models/BusinessUser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BusinessUser)
export class FindFirstBusinessUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => BusinessUser, {
    nullable: true
  })
  async findFirstBusinessUserOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBusinessUserOrThrowArgs): Promise<BusinessUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).businessUser.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
