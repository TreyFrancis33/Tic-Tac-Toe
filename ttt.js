const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const turns = document.getElementById('turnlbl');
const winCond = [
    [btn1,btn2,btn3],
    [btn4,btn5,btn6],
    [btn7,btn8,btn9],
    [btn1,btn4,btn7],
    [btn2,btn5,btn8],
    [btn3,btn6,btn9],
    [btn1,btn5,btn9],
    [btn3,btn5,btn7],
];

btn1.addEventListener('click', () => {
    buttonClicked(btn1);
});
btn2.addEventListener('click', () => {
    buttonClicked(btn2);
});
btn3.addEventListener('click', () => {
    buttonClicked(btn3);
});
btn4.addEventListener('click', () => {
    buttonClicked(btn4);
});
btn5.addEventListener('click', () => {
    buttonClicked(btn5);
});
btn6.addEventListener('click', () => {
    buttonClicked(btn6);
});
btn7.addEventListener('click', () => {
    buttonClicked(btn7);
});
btn8.addEventListener('click', () => {
    buttonClicked(btn8);
});
btn9.addEventListener('click', () => {
    buttonClicked(btn9);
});

start.onclick = () => {
    for (let i = 1; i < 10; i++) {
        document.getElementById(i.toString()).innerHTML = ' ';
    }
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
        button.innerHTML = "X";
        button.style.fontSize = "70px";
        button.style.color = "red";
        button.disabled = true;
        changeLabel('O Turn');
        checkWin(0,1,2);
        checkWin(3,4,5);
        checkDiagonals(6,7);
    } else if (turns.innerHTML == "O Turn") {
        button.innerHTML = "O";
        button.style.fontSize = "70px";
        button.style.color = "blue";
        button.disabled = true;
        changeLabel('X Turn');
        checkWin(0,1,2);
        checkWin(3,4,5);
        checkDiagonals(6,7);
    }
}

function checkWin(gridCheckNum1,gridCheckNum2,gridCheckNum3) {
    let xCount1 = 0, oCount1 = 0;
    let xCount2 = 0, oCount2 = 0;
    let xCount3 = 0, oCount3 = 0;
    for (let i = 0; i < 3; i++) {
        if (winCond[gridCheckNum1][i].innerHTML == 'X') {
            xCount1++;
        } else if (winCond[gridCheckNum1][i].innerHTML == 'O') {
            oCount1++;
        }
        if (winCond[gridCheckNum2][i].innerHTML == 'X') {
            xCount2++;
        } else if (winCond[gridCheckNum2][i].innerHTML == 'O') {
            oCount2++;
        }
        if (winCond[gridCheckNum3][i].innerHTML == 'X') {
            xCount3++;
        } else if (winCond[gridCheckNum3][i].innerHTML == 'O') {
            oCount3++;
        }
    }
    if (xCount1 == 3) {
        won('X Won', gridCheckNum1, 'disable');
        return true;
    } else if (xCount2 == 3) {
        won('X Won', gridCheckNum2, 'disable');
        return true;
    } else if (xCount3 == 3) {
        won('X Won', gridCheckNum3, 'disable');
        return true;
    } else if (oCount1 == 3) {
        won('O Won', gridCheckNum1, 'disable');
        return true;
    } else if (oCount2 == 3) {
        won('O Won', gridCheckNum2, 'disable');
        return true;
    } else if (oCount3 == 3) {
        won('O Won', gridCheckNum3, 'disable');
        return true;
    }  else {
        return false;
    }
}

function checkDiagonals(gridCheckNum1,gridCheckNum2) {
    let xCount1 = 0, oCount1 = 0;
    let xCount2 = 0, oCount2 = 0;
    for (let i = 0; i < 3; i++) {
        if (winCond[gridCheckNum1][i].innerHTML == 'X') {
            xCount1++;
        } else if (winCond[gridCheckNum1][i].innerHTML == 'O') {
            oCount1++;
        }
        if (winCond[gridCheckNum2][i].innerHTML == 'X') {
            xCount2++;
        } else if (winCond[gridCheckNum2][i].innerHTML == 'O') {
            oCount2++;
        }
    }
    if (xCount1 == 3) {
        won('X Won', gridCheckNum1, 'disable');
        return true;
    } else if (xCount2 == 3) {
        won('X Won', gridCheckNum2, 'disable');
        return true;
    } else if (oCount1 == 3) {
        won('O Won', gridCheckNum1, 'disable');
        return true;
    } else if (oCount2 == 3) {
        won('O Won', gridCheckNum2, 'disable');
        return true;
    } else {
        return false;
    }
}

function resetOrDisableButtons(action) {
    if (action == 'reset') {
        for (let i = 1; i < 10; i++) {
            document.getElementById(i.toString()).innerHTML = ' ';
        }
    } else if (action == 'disable') {
        for (let i = 1; i < 10; i++) {
            document.getElementById(i.toString()).disabled = true;
        }
    }
}

function enableButtons() {
    for (let i = 1; i < 10; i++) {
        document.getElementById(i.toString()).disabled = false;
    }
}

function changeLabel(text) {
    turns.innerHTML = text;
    if (text == "X Turn") {
        turns.style.color = "red";
    } else if (text == "O Turn") {
        turns.style.color = "blue";
    } else {
        turns.style.color = "white";
    }
}

function won(whoWon, rowNum, action) {
    changeLabel(whoWon);
    colorBtns(rowNum);        
    resetOrDisableButtons(action);
}

function colorBtns(rowNum) {
    for(let i = 0; i < 3; i++) {
        winCond[rowNum][i].style.color = 'green';
    }
}