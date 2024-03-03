//Print the digits of the integer in a single line separated by space,

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

    const N = userInput[0].split("").join(" ");
    console.log(N);

  //end-here
});