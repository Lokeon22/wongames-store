import { Values } from "../components/ExploreSidebar"

export const where_categories = [
  "Action",
  "Adventures",
  "Horror",
  "Fantasy",
  "Role-playing",
  "Jrpg",
  "Simulation",
  "Strategy",
  "Shooter"
]

export const categoryArrayFilter = (values: Values) => {
  return Object.keys(values)
    .map((key) => values[key])
    .filter(
      (value) =>
        typeof value === "string" &&
        !["price:asc", "price:desc"].includes(value)
    )
    .filter(Boolean)
}
