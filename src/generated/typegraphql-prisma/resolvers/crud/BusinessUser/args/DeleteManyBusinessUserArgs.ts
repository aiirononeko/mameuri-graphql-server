import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessUserWhereInput } from "../../../inputs/BusinessUserWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBusinessUserArgs {
  @TypeGraphQL.Field(_type => BusinessUserWhereInput, {
    nullable: true
  })
  where?: BusinessUserWhereInput | undefined;
}
