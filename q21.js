//Let "A"  be a string. Remove all the whitespaces and find it's length.

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

    const A= userInput[0].split(" ").join("");
    console.log(A.length);

  //end-here
});