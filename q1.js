//You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”
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

  var a = userInput[0];
  var b = userInput[1]
  var c = a*b;
  console.log(c);

  //end-here
});