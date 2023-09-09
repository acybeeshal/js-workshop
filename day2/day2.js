function square_of_number(number) 
{
return number * number;
}
function calc() 
{
for (let i = 1; i <= 5; i++) 
{
let number = prompt("Enter a number: ");
let result = square_of_number(number);
alert("The square of " + number + " is " + result);
 }
}
calc();