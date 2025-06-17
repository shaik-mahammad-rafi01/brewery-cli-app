import { products } from "../data/product-data";
import { SelectedItem } from "../interfaces/order-item";
import { cupSize } from "../interfaces/order-item";
import { ask } from "./readline-module";
export let selectedItems: SelectedItem[] = [];
export async function orderProduct(): Promise<SelectedItem[]> {
    while (true) {
        const name = (await ask("\nEnter the product name: ")).trim();
        if (name.toLowerCase() === "done") break;

        const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());
        if (!product) {
            console.log("❌ Product not found. Try again.");
            continue;
        }
    }
    return selectedItems
}