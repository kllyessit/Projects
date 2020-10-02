const choice = ["Rock", "Paper", "Scissors"];
const buttons = document.getElementsByClassName("button");
const score = [0,0];
const scoreChart = document.getElementById("scoreChart");
const info = document.getElementById("info");
const winner = document.getElementById("winner");

const start = (e) => {
    // Players selection
    let playerSel = e.target.innerText;
    const computerSel = choice[parseInt(Math.random()*choice.length)];
    console.log(playerSel, computerSel);

    // Passing in the selection to see who is the winner
    let result = checkWinner(playerSel, computerSel);
    if (result === 'Player') {
        result += ' wins!';
        // updating score board
        score[0]++;
    } else if (result === 'Computer') {
        result += ' wins!';
        // updating score board
        score[1]++;
    }

    // Displaying and updating score board
    scoreChart.innerText = 'Player: [' + score[0] + '] Computer: [' + score[1] + ']';
    // Updating Computer and Players choice
    info.innerText = 'Player: ' + playerSel + 'Computer: ' + computerSel;
    //Updating who the winner is
    winner.innerText = result;
};
// Looping through buttons and adding event listener
for ( var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', start);
}
const checkWinner = (player, computer) => {
    if (player === computer) {
        return 'Draw!';
    }

    // Rock
    if (player === 'Rock') {
        if (computer === choice[1]) {
            return 'Computer';
        } else {
            return 'Player'
        }
    }

    // Paper
    if (player === 'Paper') {
        if (computer === choice[2]) {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
    
    // Scissor
    if (player === 'scissors') {
        if (computer === choice[0]) {
            return 'Computer'
        }
    } else {
        return 'Player';
    }
};
