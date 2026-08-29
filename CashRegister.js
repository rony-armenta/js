class cashRegister {
    constructor() {
        // Our available inventory
        this.intemForSale = [
            {name: "iPhone", price: 999},
            {name: "smartTV", price: 450},
            {name: "Gaming Console", price: 450}
        ];
        // Shping cart start as empty status 
        this.shopingCart = [];
        this.unitQuantity = 0;
        this.unitTotal = 0;
        this.unitPrice = 0;
        this.total = 0;

    }

    addItemToCart(itemName) {
        const foundItem = this.intemForSale.find(item => item.name === itemName);
        
        if (foundItem) {
            this.shopingCart.push(foundItem);
        } else {
            console.log("Item " + itemName + " not found");
            
        }
    }

}

const myShops = new cashRegister();
myShops.addItemToCart("iPhone"); 
