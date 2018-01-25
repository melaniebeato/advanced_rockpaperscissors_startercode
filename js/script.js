//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

//FUNCTIONS
$(document).ready(function() {
 $("button").click(function() {
        var userInput = ‘Rock’;
userInput = userInput.toLowerCase();

function ComputerChoice() {
Math.floor(Math.random() * 3);
if  (ComputerChoice = 0) {return ‘rock’};
if (ComputerChoice = 1) {return ‘paper’};
if (ComputerChoice = 2) {return ‘scissors’};
}

function determineWinner(userChoice, computerChoice) {
if (userChoice === computerChoice) {
return ‘tie’;
}
if (userChoice === ‘rock’) {
if (computerChoice === ‘paper’) {
return ‘computer wins’
}
else {return ‘human wins’}
}
if (userChoice === ‘paper’) {
if (computerChoice === ‘scissors’) {
return ‘computer wins’
}
else {return ‘ winner’}
}
if (userChoice === ‘scissors’) {
if (computerChoice === ‘rock’) {
return ‘computer wins’}
else {return ‘winner’}
}
}
       
    });
});
// DOCUMENT READY FUNCTION

