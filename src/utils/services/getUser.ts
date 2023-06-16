import { UsersFromAPI, getUsersParams } from "../../types/api"

export async function getUsers({
 numberUsers,
}: getUsersParams): Promise<UsersFromAPI> {
 const URL = `https://randomuser.me/api/?results=${numberUsers}`
 const response = await fetch(URL)
 if (!response.ok) throw new Error(response.statusText)
 const data = await response.json()
 return data
}
