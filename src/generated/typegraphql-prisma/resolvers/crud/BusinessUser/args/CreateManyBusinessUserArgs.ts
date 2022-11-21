import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessUserCreateManyInput } from "../../../inputs/BusinessUserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBusinessUserArgs {
  @TypeGraphQL.Field(_type => [BusinessUserCreateManyInput], {
    nullable: false
  })
  data!: BusinessUserCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
