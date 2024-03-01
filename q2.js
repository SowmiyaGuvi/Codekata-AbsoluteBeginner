//You are provided with a number check whether its odd or even. 
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  var number = userInput[0];
    if(number % 2 == 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
