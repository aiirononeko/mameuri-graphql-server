import { buildSchemaSync } from 'type-graphql'
import {
  CreateOneBusinessUserResolver,
  FindUniqueBusinessUserResolver,
  UpdateOneBusinessUserResolver,
  DeleteOneBusinessUserResolver
} from 'generated/typegraphql-prisma'

export const schema = buildSchemaSync({
  'resolvers': [
    CreateOneBusinessUserResolver,
    FindUniqueBusinessUserResolver,
    UpdateOneBusinessUserResolver,
    DeleteOneBusinessUserResolver,
  ],
  'validate': false
})
