import { ItemProps } from "@/components/ExploreSidebar"
import { parseQueryStringToWhere, parseQueryStringToFilter } from "."

type FilterProps = Pick<ItemProps, "name" | "type">

//items filter
const filterItems: FilterProps[] = [
  { name: "where_price", type: "radio" },
  { name: "where_name", type: "checkbox" },
  { name: "where_price", type: "checkbox" },
  { name: "where_category", type: "checkbox" },
  { name: "sort", type: "radio" }
]

//query do usuario
const queryString = {
  where_price: 399,
  where_name: "baldurs",
  sort: "price:desc"
}

describe("parseQueryString()", () => {
  it("should parse queryString to where format", () => {
    const parsedQuery = parseQueryStringToWhere({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      where_price: 399,
      where_name: "baldurs",
      sort: "price:desc"
    })
  })

  it("should parse queryStringToFilter values format", () => {
    const parsedQuery = parseQueryStringToFilter({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      where_price: 399,
      where_name: "baldurs",
      sort: "price:desc"
    })
  })
})
