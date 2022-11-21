import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessUserCreateInput } from "../../../inputs/BusinessUserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBusinessUserArgs {
  @TypeGraphQL.Field(_type => BusinessUserCreateInput, {
    nullable: false
  })
  data!: BusinessUserCreateInput;
}
