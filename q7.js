//You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.

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

  const line1 = userInput[0].split(" ");
  
  const P = Number(line1[0]);
  const T = Number(line1[1]);
  const R = Number(line1[2]);
  
  console.log(((P*T*R)/100).toFixed(2));

  //end-here
});