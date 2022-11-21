import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessUserOrderByWithRelationInput } from "../../../inputs/BusinessUserOrderByWithRelationInput";
import { BusinessUserWhereInput } from "../../../inputs/BusinessUserWhereInput";
import { BusinessUserWhereUniqueInput } from "../../../inputs/BusinessUserWhereUniqueInput";
import { BusinessUserScalarFieldEnum } from "../../../../enums/BusinessUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstBusinessUserOrThrowArgs {
  @TypeGraphQL.Field(_type => BusinessUserWhereInput, {
    nullable: true
  })
  where?: BusinessUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BusinessUserOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BusinessUserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BusinessUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: BusinessUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BusinessUserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "email"> | undefined;
}
