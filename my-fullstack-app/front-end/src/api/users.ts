import { apiBaseUrl } from "./config"

export interface UserDto {
  id: string
  email: string
  firstName: string
  lastName: string
}

export interface GetUsersParams {
  size?: number
}

export const getUsers = async (params: GetUsersParams = {}) => {
  const { size } = params;
  const searchParams = new URLSearchParams()

  if (size && size > 0) {
    searchParams.set('size', `${size}`)
  }

  return ((await fetch(`${apiBaseUrl}/users?${searchParams}`)).json()) as Promise<UserDto[]>
}
