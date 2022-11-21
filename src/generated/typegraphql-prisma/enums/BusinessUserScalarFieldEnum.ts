import * as TypeGraphQL from "type-graphql";

export enum BusinessUserScalarFieldEnum {
  id = "id",
  name = "name",
  email = "email"
}
TypeGraphQL.registerEnumType(BusinessUserScalarFieldEnum, {
  name: "BusinessUserScalarFieldEnum",
  description: undefined,
});
