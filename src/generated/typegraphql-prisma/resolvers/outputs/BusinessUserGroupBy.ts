import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessUserAvgAggregate } from "../outputs/BusinessUserAvgAggregate";
import { BusinessUserCountAggregate } from "../outputs/BusinessUserCountAggregate";
import { BusinessUserMaxAggregate } from "../outputs/BusinessUserMaxAggregate";
import { BusinessUserMinAggregate } from "../outputs/BusinessUserMinAggregate";
import { BusinessUserSumAggregate } from "../outputs/BusinessUserSumAggregate";

@TypeGraphQL.ObjectType("BusinessUserGroupBy", {
  isAbstract: true
})
export class BusinessUserGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => BusinessUserCountAggregate, {
    nullable: true
  })
  _count!: BusinessUserCountAggregate | null;

  @TypeGraphQL.Field(_type => BusinessUserAvgAggregate, {
    nullable: true
  })
  _avg!: BusinessUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => BusinessUserSumAggregate, {
    nullable: true
  })
  _sum!: BusinessUserSumAggregate | null;

  @TypeGraphQL.Field(_type => BusinessUserMinAggregate, {
    nullable: true
  })
  _min!: BusinessUserMinAggregate | null;

  @TypeGraphQL.Field(_type => BusinessUserMaxAggregate, {
    nullable: true
  })
  _max!: BusinessUserMaxAggregate | null;
}
