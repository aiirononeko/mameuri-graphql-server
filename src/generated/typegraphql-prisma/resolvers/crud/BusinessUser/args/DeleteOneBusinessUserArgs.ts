import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessUserWhereUniqueInput } from "../../../inputs/BusinessUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneBusinessUserArgs {
  @TypeGraphQL.Field(_type => BusinessUserWhereUniqueInput, {
    nullable: false
  })
  where!: BusinessUserWhereUniqueInput;
}
