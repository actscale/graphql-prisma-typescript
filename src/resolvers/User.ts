import { UserResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface UserParent {
  id: string
  createdAt: string
  updatedAt: string
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  firstName: parent => parent.firstName,
  lastName: parent => parent.lastName,
  email: parent => parent.email,
  password: parent => parent.password,
  phone: parent => parent.phone,
}
