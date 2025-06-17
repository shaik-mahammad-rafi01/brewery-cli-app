import { products } from "../data/product-data";

export function displayProducts() {
    products.forEach(p => {
        console.log(`- ${p.name} | ₹${p.price} | ${p.type} | ${p.category}`);

    });
}