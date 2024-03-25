// globals
let inventory = []

class Item{
    constructor(nameInput, categorySelection, priceInput, quantityInput, inventoryAlert){
        this.name = nameInput;
        this.category = categorySelection;
        this.price = priceInput;
        this.quantity = quantityInput;
        this.alert = inventoryAlert
    };
};

// functions

function inventoryCheck(array){
    let alert = [];
    alert = array.filter(item => item.quantity <= item.alert);
    console.log(array);
    if(alert.length > 0){
        displayItems(inventory, 'store-inventory');
    } else if(array.quantity <= array.alert){
        displayItems(inventory, 'store-inventory');
        displayItems(alert, 'needs-attention');
    }else{
        console.log("Inventory does not need any attention");
    };
    // array.forEach(item => {
    //     if(array.quantity == 0){
    //         console.log(`Inventory Alert: The store is completely out of ${array.name}. Order more ASAP!`);
    //     }else if(array.quantity <= array.alert){
    //         console.log(`Inventory Alert: ${array.name} only has ${array.quantity} remaining. `);
    //     }else{
    //         console.log("Inventory does not need any attention");
    //     };
    // });
};

function displayItems(array, elementId){
    let update = document.getElementById(elementId);
    update.innerHTML = '';
    array.forEach(item => {
        let content = document.createElement('li');
        content.textContent = `${item.name} located in ${item.category}. Price: $${item.price} Quantity: ${item.quantity} TESTING: Alert@ ${item.alert}`;
        update.appendChild(content);
    });
};

function addNewInventory(){
    let name = document.getElementById('product-name-input').value;
    let category;
    
    function detectCategory(){
        let radioOptions = document.getElementsByName('product-category-radio');
        for(let i=0; i<radioOptions.length; i++){
            if(radioOptions[i].checked){
                category = radioOptions[i].value;
            };
        };
    };
    detectCategory();

    let price = Number(document.getElementById('product-price-input').value);
    let quantity = Number(document.getElementById('product-quantity-input').value);
    let alert = document.getElementById('product-inventory-alert').value;
    const product = new Item(name, category, price, quantity, alert);
    inventory.push(product);
    inventoryCheck(inventory);
}

// event listeners

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('add-to-inventory-btn').onclick = () => {
        addNewInventory();
    }

})