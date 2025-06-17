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

        const enteredQuantity = await ask("Enter the quantity: ");
        const quantity = parseInt(enteredQuantity);
        if (isNaN(quantity) || quantity <= 0) {
            console.log("❌ Please enter a valid quantity.");
            continue;
        }

        let cupsize: cupSize | undefined;
        if (product.category === "Beverages") {
            const size = (await ask("Enter cup size (small, medium, large): ")).trim().toLowerCase();
            if (!["small", "medium", "large"].includes(size)) {
                console.log("Invalid cup size. Defaulting to 'small'.");
                cupsize = "small";
            } else {
                cupsize = size as cupSize;
            }
        }
    }
    return selectedItems
}