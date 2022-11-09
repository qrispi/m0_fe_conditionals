// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents)
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents)

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers)

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents)

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20)

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21)

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20)

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21)


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// This line is checking if 4 is less than 9. It should log true in the console.

var books = 3;
console.log(4 < books);
// This line is checking if variable 'books' is greater than 4. Since 'books' has been assigned as 3, it should log false in the console.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// This line is checking if variable 'friends' is greater than variable 'siblings'. Since 'friends' is assigned as 6 and 'siblings' is assigned as 2, and 6 > 2, it should log true in the console.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// This line is checking if variable 'attendees' does not equal variable 'meals'. Since 'attendees is assigned as 9 and 'meals' is assigned as 8 and 9 != 8, it should log true in the console.


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log("Does the dog love to play and love treats?")
if (lovesToPlay && lovesTreats) {
    console.log("Of course it does, it's a dog!")
} else {
    console.log("It doesn't, are you sure it's a dog?")
}


// Determine if the dog loves to play and loves the dog park
console.log("Does the dog love to play and love the dog park?")
if (lovesToPlay && lovesDogPark) {
    console.log("Of course it does, it's a dog!")
} else {
    console.log("It doesn't, it's a little shy.")
}

// Determine if the dog loves to play or loves the dog park
console.log("Does the dog love to play or love the dog park?")
if (lovesToPlay || lovesDogPark) {
    console.log("It definitely loves at least one of those things!")
} else {
    console.log("It doesn't, are you sure it's a dog?")
}
// Alternatively the question could be read as, 'which activity does the dog like?'. Code for that scenario would like this:
console.log("Does the dog love to play or love the dog park?")
if (lovesToPlay && lovesDogPark) {
    console.log("It loves both of those things!")
} else if (lovesToPlay) {
    console.log("It loves to play!")
} else if (lovesDogPark) {
    console.log("It loves the dog park!")
} else {
    console.log("It doesn't, are you sure it's a dog?")
}

// Determine if the dog loves to play and is a puppy
// We are going to assume that any dog who is at least 1 is not a puppy although I disagree with what google says regarding this matter!
console.log("Does the dog love to play and is it a puppy?")
if (lovesToPlay && age < 1) {
    console.log("It loves to play and is a puppy!")
} else if (lovesToPlay && age <= 1) {
    console.log("It loves to play but it's not a puppy!")
} else if (lovesToPlay = false && age < 1) {
    console.log("It's a puppy but it doesn't love to play")
} else {
    console.log("It's not a puppy and it doesn't love to play; are you sure it's a dog?")
}

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: The console logged 'It loves to play but it's not a puppy!'. This happened because lovesToPlay is true but age was not less than 1.