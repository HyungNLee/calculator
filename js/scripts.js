//prompt for number inputs.
var number1 = parseFloat(prompt("Enter a number:"));
var number2 = parseFloat(prompt("Enter another number:"));

//Add function
var add = function(number1, number2) {
	return number1 + number2;
};

//Subtract function
var subtract = function(number1, number2) {
  return number1 - number2;
};

//Divide function
var divide = function(number1, number2) {
  return number1 / number2;
};

//Multiply function
var multiplication = function(number1, number2) {
  return number1 * number2;
};

//Shows result in alert function.
result = multiplication(number1, number2);
alert(result);
