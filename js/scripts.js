//Business (or back-end) logic:
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
var multiply = function(number1, number2) {
  return number1 * number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {

	$("#numberBox button").click(function() {
		event.preventDefault();
		var number1 = parseInt($("#number1").val());
		var number2 = parseInt($("#number2").val());
		if($(this).attr("id")=="add") {
			var result = add(number1, number2);
			$("#output").text(result);
			$("#numberBox")[0].reset();
		} else if($(this).attr("id")=="subtract") {
			var result = subtract(number1, number2);
			$("#output").text(result);
			$("#numberBox")[0].reset();
		} else if($(this).attr("id")=="divide") {
			var result = divide(number1, number2);
			$("#output").text(result);
			$("#numberBox")[0].reset();
		} else if ($(this).attr("id")=="multiply") {
			var result = multiply(number1, number2);
			$("#output").text(result);
			$("#numberBox")[0].reset();
		}
	})
})
