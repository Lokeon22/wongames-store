import { ItemProps } from "../../components/ExploreSidebar"
import { ParsedUrlQueryInput } from "querystring"

type FilterItemProps = Pick<ItemProps, "name" | "type">

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: FilterItemProps[]
}

export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParseArgs) => {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key)
    const type = item?.type

    obj[key] = type !== "checkbox" ? queryString[key] : queryString[key]
  })

  return obj
}

//can create a object on if, example; :{any_name: queryString[key]}

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key)
    const isCheckbox = item?.type === "checkbox"
    const isArray = Array.isArray(queryString[key])

    obj[key] = !isArray && isCheckbox ? queryString[key] : queryString[key]
  })

  return obj
}

/*queryfilter example
{
  "limit": 15,
  "start": 0,
  "where_name": "",
  "where_price": 399,
  "where_category": "",
  "sort": "price:desc"
} */
