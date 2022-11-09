// ## Spicy

// Write a JavaScript program that prints out a String or Number: 
// The printed value will depend on the value of a Number. 
// If the Number is a multiple of 3, print "Fizz". 
// If the Number is a multiple of 5, print "Buzz". 
// If the Number is a multiple of both 3 and 5, print "FizzBuzz". 
// If the Number is not a multiple of either, print the Number itself.

// This works in Replit but not the Terminal, I think because the Terminal will not allow you to enter any input during a function.

var input = prompt("Type a number to see what happens!")
var num = parseInt(input)
var multiT = num % 3
var multiF = num % 5

if (multiT === 0 && multiF === 0) {
    console.log("FizzBuzz!")
} else if (multiT === 0) {
    console.log("Fizz")
} else if (multiF === 0) {
    console.log("Buzz")
} else {
    console.log(input)
}