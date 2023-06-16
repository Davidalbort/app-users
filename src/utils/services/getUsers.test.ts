import { getUsers } from "./getUser"

describe("getUsers", () => {
 it("Should a function", () => {
  expect(typeof getUsers).toBe("function")
 })
 it("Should return users if response is ok", () => {
  const mockResponseUsers = [
   {
    id: 1,
    name: "test",
   },
   {
    id: 2,
    name: "test2",
   },
  ]
  global.fetch = jest.fn(() =>
   Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockResponseUsers),
   })
  ) as jest.Mock
  const users = getUsers({ numberUsers: 2 })
  expect(users).resolves.toEqual(mockResponseUsers)
 })
})
