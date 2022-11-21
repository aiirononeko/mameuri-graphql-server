import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessUserOrderByWithAggregationInput } from "../../../inputs/BusinessUserOrderByWithAggregationInput";
import { BusinessUserScalarWhereWithAggregatesInput } from "../../../inputs/BusinessUserScalarWhereWithAggregatesInput";
import { BusinessUserWhereInput } from "../../../inputs/BusinessUserWhereInput";
import { BusinessUserScalarFieldEnum } from "../../../../enums/BusinessUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBusinessUserArgs {
  @TypeGraphQL.Field(_type => BusinessUserWhereInput, {
    nullable: true
  })
  where?: BusinessUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BusinessUserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BusinessUserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BusinessUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "email">;

  @TypeGraphQL.Field(_type => BusinessUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BusinessUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
