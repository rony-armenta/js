class cashRegister {
    constructor() {
        // Our available inventory
        this.intemForSale = [
            {name: "iPhone", price: 999, brand: "Apple"},
            {name: "smartTV", price: 450, brand: "Samsung"},
            {name: "Gaming Console", price: 450, brand: "Sony"}
        ];
        // Shping cart start as empty status 
        this.shoppingCart = [];
        this.unitQuantity = 0;
        this.unitTotal = 0;
        this.unitPrice = 0;
        this.total = 0;

    }

    addItemToCart(itemName) {
        const foundItem = this.intemForSale.find(item => item.name === itemName);
        
        if (foundItem) {
            this.shoppingCart.push(foundItem);
            console.log("Item " + itemName + " added to the cart. Price: $" + foundItem.price + ", Brand: " + foundItem.brand);
        } else {
            console.log("Item " + itemName + " not found");
            
        }
    }

}

const myShops = new cashRegister();
myShops.addItemToCart("garrr"); 
