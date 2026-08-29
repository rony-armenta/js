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
        this.tax = 0;
        this.subtotal = 0;

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

    removeItemFromCart(itemName) {
        const carItems = this.shoppingCart.find(item => item.name === itemName);
        if (carItems) {
            this.shoppingCart.pop(carItems);
            console.log("Item: " + itemName + " have been removed from the cart");

        }else{
            console.log("Item: " + itemName + " does not exist in the cart");   
        }

    }

    calculateTotal(){
        let total = 0;
        let taxes = 0;
        let subtotal = 0;
        this.shoppingCart.forEach(purshasedItem => {totalPriceAmount += item.price});
        taxes = totalPriceAmount * 0.16;
        subtotal = totalPriceAmount + taxes;
        console.log("Sub total = " + subtotal);
        console.log("Taxes = " + taxes);
        console.log("Total = " + totalPriceAmount);
    }

}

const myShops = new cashRegister();
//myShops.addItemToCart("iPhone");
myShops.calculateTotal();
//myShops.removeItemFromCart("SmartTV"); 
