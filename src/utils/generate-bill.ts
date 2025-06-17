import { SelectedItem } from "../interfaces/order-item";
import { Product } from "../interfaces/product";
import { selectedItems } from "./order-product";

export async function billing(): Promise<SelectedItem[]> {
   
    console.log("Final bill for All Products")

    let total = 0;
    let discount = 0;
    selectedItems.forEach((item: { product: Product; quantity: number; }) => {
        const { product, quantity } = item;
        const itemTotal = product.price * quantity;
        total += itemTotal;
        console.log("Total cost : " + total)
    });
    if (total > 1000) {
        discount = total * 0.1;
        total -= discount;
        console.log("Discount is applied (10% off for if bill > 1000)")
    }
    return selectedItems;
}