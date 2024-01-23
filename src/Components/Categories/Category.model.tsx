
export type Category = {
    id: number
    name: string
    image: string
}

export type CategoryList = Category[]

export type CategoryProps = {
    category: Category
}

export type CategoryListProps = {
    categorylist: CategoryList
}

