import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessUserAvgOrderByAggregateInput } from "../inputs/BusinessUserAvgOrderByAggregateInput";
import { BusinessUserCountOrderByAggregateInput } from "../inputs/BusinessUserCountOrderByAggregateInput";
import { BusinessUserMaxOrderByAggregateInput } from "../inputs/BusinessUserMaxOrderByAggregateInput";
import { BusinessUserMinOrderByAggregateInput } from "../inputs/BusinessUserMinOrderByAggregateInput";
import { BusinessUserSumOrderByAggregateInput } from "../inputs/BusinessUserSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BusinessUserOrderByWithAggregationInput", {
  isAbstract: true
})
export class BusinessUserOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BusinessUserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BusinessUserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BusinessUserAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BusinessUserAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BusinessUserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BusinessUserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BusinessUserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BusinessUserMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BusinessUserSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BusinessUserSumOrderByAggregateInput | undefined;
}
