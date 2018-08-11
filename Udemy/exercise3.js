
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.


// BONUS: Make a program that can subtract, multiply, and also divide!
var result;
var firstNum = prompt("Enter the first number");
var secondNum = prompt('Enter the second number');
var operation = prompt('Enter the operation: +, -, *, /');
if (operation === "+"){
  var result = Number(firstNum) + Number(secondNum);
  alert("Result: " + result);
}
else if (operation === "-") {
  var result = Number(firstNum) - Number(secondNum);
  alert("Result: " + result);
}
else if (operation === "*") {
  var result = Number(firstNum) * Number(secondNum)
  alert("Result: " + result);
}
else{
  var result = Number(firstNum) / Number(secondNum);
  alert("Result: " + result);
}
//alert("Result: " + result);
