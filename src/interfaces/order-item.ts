import { Product } from "./product.js"
export type cupSize = "small" | "medium" | "large"
export interface SelectedItem {
    product: Product,
    quantity: number,
    cupsize?: cupSize
}