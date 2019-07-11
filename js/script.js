var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var add = function(number1, number2) {
  return number1 + number2;}
var subtract = function(number1,number2){
return number1 - number2;
}
var modulus = function(number1, number2){
return number1 % number2;
}
alert(add(number1, number2));
alert(subtract(number1, number2));
alert(modulus(number1, number2));
