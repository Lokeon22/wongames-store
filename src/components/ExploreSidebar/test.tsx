import { render, screen, waitFor } from "../../utils/test-utils"
import userEvent from "@testing-library/user-event"
import "jest-styled-components"

import ExploreSidebar from "."
import items from "./mock"

describe("<ExploreSidebar />", () => {
  it("should render headings", () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole("heading", { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /sort by/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /platforms/i })
    ).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /genre/i })).toBeInTheDocument()
  })

  it("should render inputs", () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(
      screen.getByRole("checkbox", { name: /under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("radio", { name: /low to high/i })
    ).toBeInTheDocument()
  })

  it("should render the filter button", () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole("button", { name: /filter/i })).toBeInTheDocument()
  })

  it("should check initial values that are passed", () => {
    render(
      <ExploreSidebar
        items={items}
        onFilter={jest.fn}
        initialValues={{ windows: "windows", sort_by: "low-to-high" }}
      />
    )

    expect(screen.getByRole("checkbox", { name: /windows/i })).toBeChecked()

    expect(screen.getByRole("radio", { name: /low to high/i })).toBeChecked()
  })

  it("should return selected items in OnFilter", async () => {
    const onFilter = jest.fn()

    render(
      <ExploreSidebar
        items={items}
        onFilter={onFilter}
        initialValues={{ windows: "windows", sort_by: "low-to-high" }}
      />
    )

    userEvent.click(screen.getByRole("button", { name: /filter/i }))

    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledWith({
        windows: "windows",
        sort_by: "low-to-high"
      })
    })
  })

  it("should filter with checked values", async () => {
    const onFilter = jest.fn()

    render(<ExploreSidebar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/low to high/i))

    userEvent.click(screen.getByRole("button", { name: /filter/i }))

    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledWith({
        windows: "windows",
        sort_by: "low-to-high"
      })
    })
  })

  it("should altern between radio options", async () => {
    const onFilter = jest.fn()

    render(<ExploreSidebar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByLabelText(/high to low/i))

    userEvent.click(screen.getByRole("button", { name: /filter/i }))

    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledWith({
        sort_by: "high-to-low"
      })
    })
  })
})
