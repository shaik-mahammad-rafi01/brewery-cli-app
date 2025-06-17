import { SelectedItem } from "./interfaces/order-item";
import { displayProducts } from "./utils/display-products";
import { billing } from "./utils/generate-bill";
import { orderProduct, selectedItems } from "./utils/order-product";

export async function startBilling():Promise<SelectedItem[]> {
    console.log("Welcome to Brewery!\n");
    console.log('Available Products in our Restarant :\n\n');

    displayProducts();
    orderProduct();
    billing()
return selectedItems;
}
startBilling();