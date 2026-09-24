//Create a set of variable
var ownerName = "Maria Baker";
var managerName = "Dylan Crisp";
var employeeName = "John Cook";

var ownerAge = 57;
var managerAge = 42;
var employeeAge = 33;
var checkCompleted = true;


//Change the values of some of your variables
var ownerName = "Margarita Baker";
var ownerAge = 35;
var managerAge = 44;
var employeeAge = 36;


//Display function
function displayParameter(parameter){
return parameter;
}
console.log("New bakery owner:", displayParameter(ownerName))

//Create an array with 5 items, list the second and third items
let fruitBasket = ["Apple", "Orange", "Pear", "Pineapple"];
console.log("FRUIT BASKET ITEMS!", "★ Second item:", fruitBasket[1], "★ Third item:", fruitBasket[2]);


//Create a variable playerScore
var playerScore = 0;


//Create a function that adds one to the playerScore variable (like the player score or computer score we created last week in scratch) everytime the function is called
function scoreCount() {
    playerScore++;
    console.log("Player score:", playerScore);
}

//Create a function that displays the playerScore value
for ( let i = 0; i < 10; i++ ) {
scoreCount();
}

//If score is greater than or equal to 10, message "You win!"
if (playerScore >= 10) {
    console.log("You win!");
}


//Determine if the playerScore is even or odd and display a message to the console
function scoreEven(number) {
    return number % 2 === 0;
}
function scoreOdd(number) {
    return number % 2 !== 0;
}
console.log("Score is even:", scoreEven(playerScore));
console.log("Score is odd:", scoreOdd(playerScore));