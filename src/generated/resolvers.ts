/* DO NOT EDIT! */
import { GraphQLResolveInfo } from 'graphql'

export interface ITypeMap {
  Context: any

  QueryParent: any
  MutationParent: any
  AuthPayloadParent: any
  MutationResultParent: any
  UserParent: any
}

export namespace QueryResolvers {
  export type GetUserResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'][] | Promise<T['UserParent'][]>

  export interface Type<T extends ITypeMap> {
    getUser: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'][] | Promise<T['UserParent'][]>
  }
}

export namespace MutationResolvers {
  export interface ArgsSignup<T extends ITypeMap> {
    email: string
    password: string
    firstName: string
    lastName: string
    phone: string
  }

  export type SignupResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsSignup<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>

  export interface ArgsLogin<T extends ITypeMap> {
    email: string
    password: string
  }

  export type LoginResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsLogin<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>

  export interface Type<T extends ITypeMap> {
    signup: (
      parent: T['MutationParent'],
      args: ArgsSignup<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>
    login: (
      parent: T['MutationParent'],
      args: ArgsLogin<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>
  }
}

export namespace AuthPayloadResolvers {
  export type TokenResolver<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type UserResolver<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'] | Promise<T['UserParent']>

  export interface Type<T extends ITypeMap> {
    token: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    user: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'] | Promise<T['UserParent']>
  }
}

export namespace MutationResultResolvers {
  export type SuccessResolver<T extends ITypeMap> = (
    parent: T['MutationResultParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export interface Type<T extends ITypeMap> {
    success: (
      parent: T['MutationResultParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
  }
}

export namespace UserResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type FirstNameResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LastNameResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type EmailResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PasswordResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PhoneResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    createdAt: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    updatedAt: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    firstName: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    lastName: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    email: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    password: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    phone: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>
  Mutation: MutationResolvers.Type<T>
  AuthPayload: AuthPayloadResolvers.Type<T>
  MutationResult: MutationResultResolvers.Type<T>
  User: UserResolvers.Type<T>
}
