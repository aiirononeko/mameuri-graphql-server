import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessUserUpdateManyMutationInput } from "../../../inputs/BusinessUserUpdateManyMutationInput";
import { BusinessUserWhereInput } from "../../../inputs/BusinessUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBusinessUserArgs {
  @TypeGraphQL.Field(_type => BusinessUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: BusinessUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BusinessUserWhereInput, {
    nullable: true
  })
  where?: BusinessUserWhereInput | undefined;
}