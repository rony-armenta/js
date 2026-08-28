//control flow examples 
/*let a = 1
let b = 4
if (a > b) {
    console.log("A is greater than B")
    a = a - b
    console.log("A it was " + (a+1) + " but A is now: " + a)
} else {
    console.log("B is greater than A")
    b = b - a
    console.log("B it was " + (b+1) + " but B is now: " + b)
}*/



//Loops examples 
/*for (let n = 6; n <= 7; n++){
    console.log("The current value for N is: " + n)
}*/

/*const prices = [0, 1, 2, 3, 4];
let singlePrice = 0;
for (let n=0; n < prices.length; n++){
    singlePrice = prices[n]
    console.log("The current value for N is: " + n + " and the price is: " + singlePrice) 
    //console.log("The price is: " + singlePrice)
} 
//console.log("The current value for N is: " + n) */

/*let isHeads = false;
let flips = 0;

while (!isHeads) {
    flips++;
    isHeads = Math.random() < 0.5;
    //console.log(isHeads);
    console.log("Flips it tooks: " + flips + " to get heads " + "this time we got: " + isHeads);
}*/

//DOMMY PRACTICE 
//The reward challenge 

/*let score = 0;

if (score >= 80) {
    console.log("You win a prize!")
} else {
    while (score < 80) {
        score++;
    }
    console.log("Sorry, keep you trying!" + "Your score is: " + score);
}*/

//The countdown

for (let i = 10; i >= 0; i--){
    console.log(i);
}