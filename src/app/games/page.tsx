import GamesTemplate from "../../templates/Games"

const filterPrice = {
  title: "Price",
  name: "where_price",
  type: "radio",
  fields: [
    { label: "Free", name: 0 },
    { label: "Under $10", name: 10 },
    { label: "Under $20", name: 20 },
    { label: "Under $25", name: 25 },
    { label: "Under $50", name: 50 },
    { label: "Under $100", name: 100 }
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
  ] as any
}

const filterPlatforms = {
  title: "Platforms",
  name: "platforms",
  type: "checkbox",
  fields: [
    { label: "Windows", name: "windows" },
    { label: "Linux", name: "linux" },
    { label: "Mac", name: "mac" }
  ]
}

const filterSort = {
  title: "Sort by price",
  name: "sort",
  type: "radio",
  fields: [
    { label: "Highest to low", name: "price:desc" },
    { label: "Lowest to highest", name: "price:asc" }
  ]
}

const filterCategories = {
  title: "Genres",
  name: "categories",
  type: "checkbox",
  fields: [
    { label: "Action", name: "action" },
    { label: "Adventures", name: "adventures" },
    { label: "Horror", name: "horror" },
    { label: "Fantasy", name: "fantasy" },
    { label: "RPG", name: "role-playing" },
    { label: "JRPG", name: "jrpg" },
    { label: "Simulation", name: "simulation" },
    { label: "Strategy", name: "strategy" },
    { label: "Shooter", name: "shooter " }
  ]
}

const filterItems = [filterPrice, filterSort, filterCategories, filterPlatforms]

export default async function Games() {
  return <GamesTemplate filterItems={filterItems} />
}
