import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessUserCreateInput } from "../../../inputs/BusinessUserCreateInput";
import { BusinessUserUpdateInput } from "../../../inputs/BusinessUserUpdateInput";
import { BusinessUserWhereUniqueInput } from "../../../inputs/BusinessUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneBusinessUserArgs {
  @TypeGraphQL.Field(_type => BusinessUserWhereUniqueInput, {
    nullable: false
  })
  where!: BusinessUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => BusinessUserCreateInput, {
    nullable: false
  })
  create!: BusinessUserCreateInput;

  @TypeGraphQL.Field(_type => BusinessUserUpdateInput, {
    nullable: false
  })
  update!: BusinessUserUpdateInput;
}
