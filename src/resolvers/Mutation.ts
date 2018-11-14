import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { MutationResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  signup: async (_, args, ctx, _info) => {
    const password = await hash(args.password, 10)
    const user = await ctx.db.createUser({
      ...args,
      password,
    })

    const token = sign({ userId: user.id }, process.env.APP_SECRET ? process.env.APP_SECRET : "secret")

    return {
      token,
      user: await ctx.db.user({ id: user.id }),
    }
  },

  login: async (_parent, { email, password }, ctx) => {
    const user = await ctx.db.user({ email })
    const valid = await compare(password, user ? user.password : '')

    if (!valid || !user) {
      throw new Error('Invalid Credentials')
    }

    const token = sign({ userId: user.id }, process.env.APP_SECRET ? process.env.APP_SECRET : "secret")

    return {
      token,
      user: await ctx.db.user({ id: user.id }),
    }
  },
}
