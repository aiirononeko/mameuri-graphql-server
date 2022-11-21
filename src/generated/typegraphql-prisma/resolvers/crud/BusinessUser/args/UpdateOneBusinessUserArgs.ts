import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessUserUpdateInput } from "../../../inputs/BusinessUserUpdateInput";
import { BusinessUserWhereUniqueInput } from "../../../inputs/BusinessUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneBusinessUserArgs {
  @TypeGraphQL.Field(_type => BusinessUserUpdateInput, {
    nullable: false
  })
  data!: BusinessUserUpdateInput;

  @TypeGraphQL.Field(_type => BusinessUserWhereUniqueInput, {
    nullable: false
  })
  where!: BusinessUserWhereUniqueInput;
}
