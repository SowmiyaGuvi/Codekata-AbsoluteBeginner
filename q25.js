//Write a program to get a string as input and reverse the string without using temporary variable.

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

    const N = userInput[0].split('').reverse().join(''); 
    console.log(N);

  //end-here
}); 