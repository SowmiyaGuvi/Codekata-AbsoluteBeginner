//You are given with a number A i.e. the temperature in Celcius. Write a program to convert this into Fahrenheit. 

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

  const c = parseInt(userInput[0])
  console.log(((c * 9/5) + 32).toFixed(2));

  //end-here
});