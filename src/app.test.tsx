import { render, screen } from "@testing-library/react"
import { App } from "./app"

describe("App", () => {
 test("should render", () => {
  render(<App />)
  const title = screen.getByRole("heading")
  expect(title).toBeInTheDocument()
 })
})
