export type ProductType = "vegan" | "vegetarian" | "non-vegetarian"
export interface Product {
    name: string,
    price: number,
    type: ProductType,
    category: string
}