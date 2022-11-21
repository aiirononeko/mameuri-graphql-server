import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BusinessUserScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BusinessUserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BusinessUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BusinessUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BusinessUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BusinessUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BusinessUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BusinessUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;
}
