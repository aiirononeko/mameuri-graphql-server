import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("BusinessUserWhereInput", {
  isAbstract: true
})
export class BusinessUserWhereInput {
  @TypeGraphQL.Field(_type => [BusinessUserWhereInput], {
    nullable: true
  })
  AND?: BusinessUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BusinessUserWhereInput], {
    nullable: true
  })
  OR?: BusinessUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BusinessUserWhereInput], {
    nullable: true
  })
  NOT?: BusinessUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;
}
