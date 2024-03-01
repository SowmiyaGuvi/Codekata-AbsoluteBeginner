//You are given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres.

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

  const K = parseInt(userInput[0]);
  const M = K*1000;
  const CM = K*100000;
  console.log(M);
  console.log(CM);

  //end-here
});