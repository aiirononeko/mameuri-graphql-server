import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBusinessUserArgs } from "./args/AggregateBusinessUserArgs";
import { CreateManyBusinessUserArgs } from "./args/CreateManyBusinessUserArgs";
import { CreateOneBusinessUserArgs } from "./args/CreateOneBusinessUserArgs";
import { DeleteManyBusinessUserArgs } from "./args/DeleteManyBusinessUserArgs";
import { DeleteOneBusinessUserArgs } from "./args/DeleteOneBusinessUserArgs";
import { FindFirstBusinessUserArgs } from "./args/FindFirstBusinessUserArgs";
import { FindFirstBusinessUserOrThrowArgs } from "./args/FindFirstBusinessUserOrThrowArgs";
import { FindManyBusinessUserArgs } from "./args/FindManyBusinessUserArgs";
import { FindUniqueBusinessUserArgs } from "./args/FindUniqueBusinessUserArgs";
import { FindUniqueBusinessUserOrThrowArgs } from "./args/FindUniqueBusinessUserOrThrowArgs";
import { GroupByBusinessUserArgs } from "./args/GroupByBusinessUserArgs";
import { UpdateManyBusinessUserArgs } from "./args/UpdateManyBusinessUserArgs";
import { UpdateOneBusinessUserArgs } from "./args/UpdateOneBusinessUserArgs";
import { UpsertOneBusinessUserArgs } from "./args/UpsertOneBusinessUserArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { BusinessUser } from "../../../models/BusinessUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBusinessUser } from "../../outputs/AggregateBusinessUser";
import { BusinessUserGroupBy } from "../../outputs/BusinessUserGroupBy";

@TypeGraphQL.Resolver(_of => BusinessUser)
export class BusinessUserCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateBusinessUser, {
    nullable: false
  })
  async aggregateBusinessUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBusinessUserArgs): Promise<AggregateBusinessUser> {
    return getPrismaFromContext(ctx).businessUser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyBusinessUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyBusinessUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).businessUser.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBusinessUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyBusinessUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).businessUser.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BusinessUser, {
    nullable: true
  })
  async deleteOneBusinessUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneBusinessUserArgs): Promise<BusinessUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).businessUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [BusinessUser], {
    nullable: false
  })
  async businessUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBusinessUserArgs): Promise<BusinessUser[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).businessUser.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BusinessUser, {
    nullable: true
  })
  async businessUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBusinessUserArgs): Promise<BusinessUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).businessUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [BusinessUserGroupBy], {
    nullable: false
  })
  async groupByBusinessUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBusinessUserArgs): Promise<BusinessUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).businessUser.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBusinessUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyBusinessUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).businessUser.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BusinessUser, {
    nullable: true
  })
  async updateOneBusinessUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneBusinessUserArgs): Promise<BusinessUser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).businessUser.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BusinessUser, {
    nullable: false
  })
  async upsertOneBusinessUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneBusinessUserArgs): Promise<BusinessUser> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).businessUser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
