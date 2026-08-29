class calculator {
    constructor() {
        this.result =10 ;
    }
    // Adition method
    add(number){
        return this.result += number;
    }

    // Subtraction method
    subtract(number){
        return this.result -= number;
    }

    // Multiplication method
    multiply(number){
        return this.result *= number;
    }

    // Division method
    divide(number){
        if (number === 0) {
            throw new Error("Cannot divide by zero");
        }
        return this.result /= number;
    }

    // Reset method
    clear(){
        this.result = 0;
        //return this.result;
    }   

}
// let's test the calculator class
const mycalc = new calculator();
console.log("starting calculations");
console.log("Add 10: " + mycalc.add(10));
console.log("Substract 4: " + mycalc.subtract(4) + mycalc.clear());
console.log("Multipy: by 5 " + mycalc.multiply(5))
console.log("Divide " + mycalc.divide(1) + mycalc.clear());
console.log("Clear results " + mycalc.clear());