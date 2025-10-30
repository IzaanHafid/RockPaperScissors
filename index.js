const p1rock = document.getElementById('p1_rock');
const p1paper = document.getElementById('p1_paper');
const p1scissors = document.getElementById('p1_scissors');

const p2rock = document.getElementById('p2_rock');
const p2paper = document.getElementById('p2_paper');
const p2scissors = document.getElementById('p2_scissors');

const play = document.getElementById('play');
const reset = document.getElementById('reset');
const error = document.getElementById('error');
const output = document.getElementById('output');

let p1ActionDone = false;
let p2ActionDone = false;

let p1Choice, p2Choice;

function calculateWinner(p1Choice, p2Choice) {
    if (p1Choice === 'rock' && p2Choice === 'paper') return 'Player 2';
    if (p1Choice === 'rock' && p2Choice === 'scissors') return 'Player 1';

    if (p1Choice === 'paper' && p2Choice === 'scissors') return 'Player 2';
    if (p1Choice === 'paper' && p2Choice === 'rock') return 'Player 1';

    if (p1Choice === 'scissors' && p2Choice === 'rock') return 'Player 2';
    if (p1Choice === 'scissors' && p2Choice === 'paper') return 'Player 1';
}

function changeStyle(obj, styleProperty, value) {
    obj.style[styleProperty] = value;
}

p1rock.onclick = function() {
    p1Choice = 'rock';
    p1ActionDone = true;
    changeStyle(p1rock, 'background-color', 'red');
    changeStyle(p1paper, 'background-color', 'rgb(15, 15, 20');
    changeStyle(p1scissors, 'background-color', 'rgb(15, 15, 20');
}

p1paper.onclick = function() {
    p1Choice = 'paper';
    p1ActionDone = true;
    changeStyle(p1paper, 'background-color', 'red');
    changeStyle(p1rock, 'background-color', 'rgb(15, 15, 20');
    changeStyle(p1scissors, 'background-color', 'rgb(15, 15, 20');
}

p1scissors.onclick = function() {
    p1Choice = 'scissors';
    p1ActionDone = true;
    changeStyle(p1scissors, 'background-color', 'red');
    changeStyle(p1rock, 'background-color', 'rgb(15, 15, 20');
    changeStyle(p1paper, 'background-color', 'rgb(15, 15, 20');

}

p2rock.onclick = function() {
    p2Choice = 'rock';
    p2ActionDone = true;
    changeStyle(p2rock, 'background-color', 'blue');
    changeStyle(p2paper, 'background-color', 'rgb(15, 15, 20');
    changeStyle(p2scissors, 'background-color', 'rgb(15, 15, 20');
    
}

p2paper.onclick = function() {
    p2Choice = 'paper';
    p2ActionDone = true;
    changeStyle(p2paper, 'background-color', 'blue');
    changeStyle(p2rock, 'background-color', 'rgb(15, 15, 20');
    changeStyle(p2scissors, 'background-color', 'rgb(15, 15, 20');
}

p2scissors.onclick = function() {
    p2Choice = 'scissors';
    p2ActionDone = true;
    changeStyle(p2scissors, 'background-color', 'blue');
    changeStyle(p2rock, 'background-color', 'rgb(15, 15, 20');
    changeStyle(p2paper, 'background-color', 'rgb(15, 15, 20');
}

play.onclick = function() {
    if (!p1ActionDone || !p2ActionDone) {
        error.style.visibility = 'visible';
        error.textContent = 'Please Select Choices for player 1 and 2';
    }

    else {
        output.style.visibility = 'visible';
        if (p1Choice === p2Choice) {
            output.textContent = 'Tie';
            changeStyle(p2rock, 'background-color', 'rgb(50, 50, 50)');
            changeStyle(p2paper, 'background-color', 'rgb(50, 50, 50)');
            changeStyle(p2scissors, 'background-color', 'rgb(50, 50, 50)');
            changeStyle(p1rock, 'background-color', 'rgb(50, 50, 50)');
            changeStyle(p1paper, 'background-color', 'rgb(50, 50, 50)');
            changeStyle(p1scissors, 'background-color', 'rgb(50, 50, 50)');
        }

        else {
            output.textContent = `${calculateWinner(p1Choice, p2Choice)} is the Winner!!`
            if (calculateWinner(p1Choice, p2Choice) === `Player 1`) {
                changeStyle(p1rock, 'background-color', 'lime');
                changeStyle(p1paper, 'background-color', 'lime');
                changeStyle(p1scissors, 'background-color', 'lime');
                changeStyle(p2rock, 'background-color', 'red');
                changeStyle(p2paper, 'background-color', 'red');
                changeStyle(p2scissors, 'background-color', 'red');
                changeStyle(p2rock, 'color', 'black');
                changeStyle(p2paper, 'color', 'black');
                changeStyle(p2scissors, 'color', 'black');
                changeStyle(p1rock, 'color', 'black');
                changeStyle(p1paper, 'color', 'black');
                changeStyle(p1scissors, 'color', 'black');
                
            }

            else if (calculateWinner(p1Choice, p2Choice) === `Player 2`) {
                changeStyle(p2rock, 'background-color', 'lime');
                changeStyle(p2paper, 'background-color', 'lime');
                changeStyle(p2scissors, 'background-color', 'lime');
                changeStyle(p1rock, 'background-color', 'red');
                changeStyle(p1paper, 'background-color', 'red');
                changeStyle(p1scissors, 'background-color', 'red');
                changeStyle(p2rock, 'color', 'black');
                changeStyle(p2paper, 'color', 'black');
                changeStyle(p2scissors, 'color', 'black');
                changeStyle(p1rock, 'color', 'black');
                changeStyle(p1paper, 'color', 'black');
                changeStyle(p1scissors, 'color', 'black');
            }
            
        }
    }

}

reset.onclick = function() {
    p1Choice = null;
    p2Choice = null;
    p1ActionDone = null;
    p2ActionDone = null;

    output.textContent = '';
    error.textContent = '';

    changeStyle(output, 'visibility', 'hidden')
    changeStyle(error, 'visibility', 'hidden')

    changeStyle(p2rock, 'background-color', 'rgb(15, 15, 20)');
    changeStyle(p2paper, 'background-color', 'rgb(15, 15, 20)');
    changeStyle(p2scissors, 'background-color', 'rgb(15, 15, 20)');
    changeStyle(p1rock, 'background-color', 'rgb(15, 15, 20)');
    changeStyle(p1paper, 'background-color', 'rgb(15, 15, 20)');
    changeStyle(p1scissors, 'background-color', 'rgb(15, 15, 20)');
    changeStyle(p2rock, 'color', 'white');
    changeStyle(p2paper, 'color', 'white');
    changeStyle(p2scissors, 'color', 'white');
    changeStyle(p1rock, 'color', 'white');
    changeStyle(p1paper, 'color', 'white');
    changeStyle(p1scissors, 'color', 'white');
}
