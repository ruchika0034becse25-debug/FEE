console.clear();
console.log("Inventory Entry System");
console.log();

const prompt = require("prompt-sync")();

let stock = [];

// Function to add an item to the inventory
function addStock() {
    let itemCode = Number(prompt("Enter Item Code : "));
    let itemName = prompt("Enter Item Name : ");
    let itemPrice = Number(prompt("Enter Price : "));
    let itemQuantity = Number(prompt("Enter Quantity : "));

    // Object containing the item's details
    let item = {
        code: itemCode,
        item: itemName,
        price: itemPrice,
        quantity: itemQuantity
    };

    // Add the item object to the stock array
    stock.push(item);

    console.log("\nInventory Updated");
    console.log();
}

// Keep adding items until the user chooses 0
while (true) {
    addStock();

    let choice = Number(
        prompt("Add More Items (0 for No / 1 for Yes) : ")
    );

    if (choice === 0) {
        break;
    }
}

console.log("\nInventory Entry Completed");
console.log("\nUpdated Stock is as follows");
console.log(stock);
console.log();