//Print the First 3 multiples of the given number "N". (N is a positive integer)
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

  const num = +userInput[0];
  let result = ' ';
  for(let i=1; i<=3; i++)
{
    result = result + (num*i)+ ' ';
}
    console.log(result.trim());

  //end-here
});