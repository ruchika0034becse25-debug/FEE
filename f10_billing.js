console.clear();
const prompt = require("prompt-sync")();

const store = "C Mart";  

// Arrays to store user input
let Items = [];
let Prices = [];
let Quantities = [];

console.log("=== Welcome to " + store + " Billing System ===");
console.log("Enter items (name, price, quantity). Type 'done' to finish.\n");

// Input loop
while (true) {
    let item = prompt("Enter Item Name (or 'done' to stop): ");
    if (item.toLowerCase() === "done") break;

    let price = Number(prompt("Enter Price of " + item + ": "));
    let quantity = Number(prompt("Enter Quantity of " + item + ": "));

    Items.push(item);
    Prices.push(price);
    Quantities.push(quantity);
}

console.log("\n============== " + store + " ===============");
console.log("SrNo.\tItem\t\tPrice\tQuantity\tCost");

let Total = 0;
for (let i = 0; i < Items.length; i++) {
    let cost = Prices[i] * Quantities[i];
    Total += cost;
    console.log((i+1) + "\t" + Items[i] + "\t\t" + Prices[i] + "\t" + Quantities[i] + "\t\t" + cost);
}

// Discount system
let discount = 0;
if (Total >= 5000) {
    discount = Total * 0.05;
} else if (Total >= 2000) {
    discount = Total * 0.02;
} else {
    discount = Total * 0.01;
}

let finalAmount = Total - discount;

console.log("\nTotal Amount : " + Total);
console.log("Discount Applied : " + discount);
console.log("Amount After Discount : " + finalAmount);
console.log("\n========= THANK YOU FOR COMING =========");
console.log("============= VISIT AGAIN ==============");