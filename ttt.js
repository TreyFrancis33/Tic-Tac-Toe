const btns = document.querySelectorAll('[data-button]');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const turns = document.getElementById('turnlbl');
const winCond = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];

btns.forEach(button => {button.addEventListener('click',() => {buttonClicked(button)})});

start.onclick = () => {
    for (let i = 1; i < 10; i++) document.getElementById(i.toString()).innerHTML = ' ';
    changeLabel('X Turn');
    start.disabled = true;
}

reset.onclick = () => {
    resetOrDisableButtons('reset');
    enableButtons();
    changeLabel('Tic-Tac-Toe');
    start.disabled = false;
}

function buttonClicked(button) {
    if (turns.innerHTML == "X Turn") {
        markButton(button,'X','70px','red');
        changeLabel('O Turn');
    } else if (turns.innerHTML == "O Turn") {
        markButton(button,'O','70px','blue');
        changeLabel('X Turn');
    }
    checkWin(0,1,2);
    checkWin(3,4,5);
    checkDiagonals(6,7);
}

function generateExercise(winner) {
    const exercises = ['Push Ups','Sit Ups','Squats','Dips','Lunges'];
    const reps = Math.floor(Math.random() * 5 + 1) * 10;
    const exercise = Math.floor(Math.random() * 5);
    let loser;
    if (winner == 'X') loser = 'O'
    if (winner == 'O') loser = 'X'
    turns.innerHTML = `Player ${loser} has ${reps} reps of ${exercises[exercise]}`;
}

function markButton(button,letter,fontSize,color) {
    button.innerHTML = letter;
    button.style.fontSize = fontSize;
    button.style.color = color;
    button.disabled = true;
}

function checkWin(gridCheckNum1,gridCheckNum2,gridCheckNum3) {
    let xCount1 = 0, oCount1 = 0;
    let xCount2 = 0, oCount2 = 0;
    let xCount3 = 0, oCount3 = 0;
    for (let i = 0; i < 3; i++) {
        if (document.getElementById((winCond[gridCheckNum1][i]).toString()).innerHTML == 'X') xCount1++;
        else if (document.getElementById((winCond[gridCheckNum1][i]).toString()).innerHTML == 'O') oCount1++;
        if (document.getElementById((winCond[gridCheckNum2][i]).toString()).innerHTML == 'X') xCount2++;
        else if (document.getElementById((winCond[gridCheckNum2][i]).toString()).innerHTML == 'O') oCount2++;
        if (document.getElementById((winCond[gridCheckNum3][i]).toString()).innerHTML == 'X') xCount3++;
        else if (document.getElementById((winCond[gridCheckNum3][i]).toString()).innerHTML == 'O') oCount3++;
        
    }
    if (xCount1 == 3) won('X Won', gridCheckNum1, 'disable');
    else if (xCount2 == 3) won('X Won', gridCheckNum2, 'disable');
    else if (xCount3 == 3) won('X Won', gridCheckNum3, 'disable');
    else if (oCount1 == 3) won('O Won', gridCheckNum1, 'disable');
    else if (oCount2 == 3) won('O Won', gridCheckNum2, 'disable');
    else if (oCount3 == 3) won('O Won', gridCheckNum3, 'disable');
}

function checkDiagonals(gridCheckNum1,gridCheckNum2) {
    let xCount1 = 0, oCount1 = 0;
    let xCount2 = 0, oCount2 = 0;
    for (let i = 0; i < 3; i++) {
        if (document.getElementById((winCond[gridCheckNum1][i]).toString()).innerHTML == 'X') xCount1++;
        else if (document.getElementById((winCond[gridCheckNum1][i]).toString()).innerHTML == 'O') oCount1++;
        if (document.getElementById((winCond[gridCheckNum2][i]).toString()).innerHTML == 'X') xCount2++;
        else if (document.getElementById((winCond[gridCheckNum2][i]).toString()).innerHTML == 'O') oCount2++; 
    }
    if (xCount1 == 3) won('X Won', gridCheckNum1, 'disable');
    else if (xCount2 == 3) won('X Won', gridCheckNum2, 'disable');
    else if (oCount1 == 3) won('O Won', gridCheckNum1, 'disable');
    else if (oCount2 == 3) won('O Won', gridCheckNum2, 'disable');    
}

function resetOrDisableButtons(action) {
    if (action == 'reset') {
        for (let i = 1; i < 10; i++) document.getElementById(i.toString()).innerHTML = ' ';
    } else if (action == 'disable') {
        for (let i = 1; i < 10; i++) document.getElementById(i.toString()).disabled = true;
    }
}

function enableButtons() {
    for (let i = 1; i < 10; i++) document.getElementById(i.toString()).disabled = false;
}

function changeLabel(text) {
    turns.innerHTML = text;
    if (text == "X Turn")  turns.style.color = "red";
    else if (text == "O Turn") turns.style.color = "blue";
    else turns.style.color = "white";
}

function won(whoWon, rowNum, action) {
    changeLabel(whoWon);
    colorBtns(rowNum);        
    resetOrDisableButtons(action);
    generateExercise(whoWon.substring(0,1));
}

function colorBtns(rowNum) {
    for(let i = 0; i < 3; i++) document.getElementById((winCond[rowNum][i]).toString()).style.color = 'green';
}