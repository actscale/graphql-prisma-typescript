// import { getUserId } from '../utils'
import { QueryResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
  getUser: async (_, _args, ctx, _info) => {
    return await ctx.db.users()
  },
}
