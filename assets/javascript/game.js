'use strict';

//I want to have a start screen with instructions. 
//The user clicks the start button, the start sceen disappears and the game screen appears
function setGame(){
$('startButton').click(function() {
    $('#startScreen').hide();
    $('#gameScreen').show();
    console.log(BLAH)
    //WORK ON THIS
}
)};




$(document).ready(function(){
    //Random number shown at beginning of game between 19-120
    let ranNum = Math.floor(Math.random()*101+19)
    console.log(ranNum)
    })
//--------VARIABLES----------//
//Generate 4 crystals with a random hidden value between 1-12
    //This gives a random number between 1 - 12 to each jewel
    let number1 = Math.floor(Math.random() * 11+1)
    let number2 = Math.floor(Math.random() * 11+1)
    let number3 = Math.floor(Math.random() * 11+1)
    let number4 = Math.floor(Math.random() * 11+1)

    //I need to set up click events for the jewels

    //This sets wins/losses/total to 0
    let wins = 0;
    let losses = 0;
    let total = 0;

    $('numberWins').text(wins);
    $('numberLosses').text(losses);

    //I need to add add wins and losses
    function win(){
        alert("You Won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    function lose(){
        alert("You Lose...");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    // condition for win/loss
   

    //This resets game
    function reset() {
        ranNum = Math.floor(Math.random()*101+19);
        console.log(ranNum)
        $('#ranNum').text(Random)
        number1 = Math.floor(Math.random() * 11+1)
        number2 = Math.floor(Math.random() * 11+1)
        number3 = Math.floor(Math.random() * 11+1)
        number4 = Math.floor(Math.random() * 11+1)
        //ADD MORE HERE
        
    }

