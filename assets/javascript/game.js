'use strict';

//I want to have a start screen with instructions. 
//The user clicks the start button, the start sceen disappears and the game screen appears
//function setGame(){
// $('startButton').click(function() {
//     $('#startScreen').hide();
//     $('#gameScreen').show();
//     console.log(BLAH)
//     //WORK ON THIS
// }
// )};

$(document).ready(function () {
    let Random = Math.floor(Math.random() * 101 + 19)
    // Select a random number between 19 - 120 to be shown at the start of the game


    $('#randomNumber').text(Random);
    
    
    let num1 = Math.floor(Math.random() * 11 + 1)
    let num2 = Math.floor(Math.random() * 11 + 1)
    let num3 = Math.floor(Math.random() * 11 + 1)
    let num4 = Math.floor(Math.random() * 11 + 1)
    // Setting up random number between 1 - 12 for each jewel
    
     
    let userTotal = 0;
    let wins = 0;
    let losses = 0;
    //  Declaring variables
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    //This resets game
    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }
    //adds the wins to the userTotal
    function win() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }
    //adds the losses to the userTotal
    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }
    //set up click event for jewels
    //MORE EFFICIENT WAY TO DO THIS??
    $('#one').on('click', function () {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //condition for win/lose
        if (userTotal == Random) {
            win();
        } else if (userTotal > Random) {
            lose();
        }
    })
    $('#two').on('click', function () {
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == Random) {
            win();
        } else if (userTotal > Random) {
            lose();
        }
    })
    $('#three').on('click', function () {
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == Random) {
            win();
        } else if (userTotal > Random) {
            lose();
        }
    })
    $('#four').on('click', function () {
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == Random) {
            win();
        } else if (userTotal > Random) {
            lose();
        }
    });
});