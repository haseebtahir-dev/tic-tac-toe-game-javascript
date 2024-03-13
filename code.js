const block_1 = document.getElementById("block-1-btn")
const block_2 = document.getElementById("block-2-btn")
const block_3 = document.getElementById("block-3-btn")
const block_4 = document.getElementById("block-4-btn")
const block_5 = document.getElementById("block-5-btn")
const block_6 = document.getElementById("block-6-btn")
const block_7 = document.getElementById("block-7-btn")
const block_8 = document.getElementById("block-8-btn")
const block_9 = document.getElementById("block-9-btn")
const circle = document.getElementById("circle-img")
const cross = document.getElementById("cross-img")
const tick = document.getElementById("tick-img")
const turn_cross = document.getElementById("turn-cross")
const turn_tick = document.getElementById("turn-tick")
const toss_hide = document.getElementById("before-toss")
const win_tick = document.getElementById("win-tick-img")
const win_cross = document.getElementById("win-cross-img")
const win_state = document.getElementById("win-state")
const quit = document.getElementById("quit")
const toss = document.getElementById("toss")
const toss_para = document.getElementById("toss-para")
const loading = document.getElementById("loading")
const takes_heading = document.getElementById("takes-heading")
const won_para = document.getElementById("won-para")
const draw_heading = document.getElementById("draw-heading")

let button = document.querySelectorAll(".block-btn")
let win_flag = false;
let disabletoss_button = false;
let count = 0;
//button disable
for (i = 0; i < button.length; i++) {
    button[i].setAttribute("disabled", "");
}

//page reload
document.querySelector(".reload").addEventListener('click', function (e) {
    location.reload();
})

var player1 = 1;
var player2 = 2;

// genrate random number
var turn;
var random;
toss.addEventListener('click', function (e) {
    e.preventDefault()
    toss_para.style.display = "none"
    loading.style.display = "inline"
    toss_hide.style.visibility = "hidden"

    random = Math.floor(Math.random() * 10);

    setTimeout(() => {
        toss_para.style.display = "inline"
        loading.style.display = "none"
        if (random < 5) {
            turn = 0
            console.log({ turn }, { random })
        }
        if (random > 5) {
            turn = 1
            console.log({ turn }, { random })
        }
        if (turn === 0) {
            turn_tick.style.display = "flex";
            turn_cross.style.display = "none";
          }
           if (turn === 1) {
            turn_cross.style.display = "flex";
            turn_tick.style.display = "none";
          }
        for (i = 0; i < button.length; i++) {
            button[i].removeAttribute("disabled", "");
            disabletoss_button = true;
        }
        if (disabletoss_button = true) {
            toss.setAttribute("disabled", "");
        }
    }, 2000)
})

// value assgin 
let arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

block_1.addEventListener('click', function (e) {

    blocks(block_1);
    if (turn == 0) {
        arr[0][0] = player1
    }
    if (turn == 1) {
        arr[0][0] = player2
    }
    count++
    check();
})

block_2.addEventListener('click', function (e) {

    blocks(block_2);
    if (turn == 0) {
        arr[0][1] = player1
    }
    if (turn == 1) {
        arr[0][1] = player2
    }
    count++
    check();
})

block_3.addEventListener('click', function (e) {

    blocks(block_3);
    if (turn == 0) {
        arr[0][2] = player1
    }
    if (turn == 1) {
        arr[0][2] = player2
    }
    count++
    check();
})

block_4.addEventListener('click', function (e) {

    blocks(block_4);
    if (turn == 0) {
        arr[1][0] = player1
    }
    if (turn == 1) {
        arr[1][0] = player2
    }
    count++
    check();
})

block_5.addEventListener('click', function (e) {

    blocks(block_5);
    if (turn == 0) {
        arr[1][1] = player1
    }
    if (turn == 1) {
        arr[1][1] = player2
    }
    count++
    check();
})

block_6.addEventListener('click', function (e) {

    blocks(block_6);
    if (turn == 0) {
        arr[1][2] = player1
    }
    if (turn == 1) {
        arr[1][2] = player2
    }
    count++
    check();
})

block_7.addEventListener('click', function (e) {

    blocks(block_7);
    if (turn == 0) {
        arr[2][0] = player1
    }
    if (turn == 1) {
        arr[2][0] = player2
    }
    count++
    check();
})

block_8.addEventListener('click', function (e) {

    blocks(block_8);
    if (turn == 0) {
        arr[2][1] = player1
    }
    if (turn == 1) {
        arr[2][1] = player2
    }
    count++
    check();
})

block_9.addEventListener('click', function (e) {

    blocks(block_9);
    if (turn == 0) {
        arr[2][2] = player1
    }
    if (turn == 1) {
        arr[2][2] = player2
    }
    count++
    check();
})

function blocks(property) {
    if (turn == 1) {
        property.children[1].style.display = "block";
        property.children[2].style.display = "none";
        turn_cross.style.display = "none";
        turn_tick.style.display = "flex";
        turn = 0; 
    } else {
        property.children[2].style.display = "block";
        property.children[1].style.display = "none";
        turn_tick.style.display = "none";
        turn_cross.style.display = "flex";
        turn = 1; 
    }
    property.children[0].style.display = "none";
}


function check() {

    let checkFirstRow = false, checkSencondRow = false, checkThirdRow = false;
    let checkFirstColum = false, checkSencondColum = false, checkThirdColum = false;
    let checkFirstDiagonal = false, checkSencondDiagonal = false;
    let flag = true
    let flag_2 = true
    let flag_3 = true
    //check row wise
    for (j = 0; j < arr[0].length; j++) {
        if (arr[0][j] != (turn + 1)) {
            flag = false
        }
    }
    if (flag)
        checkFirstRow = flag
    flag = true

    for (j = 0; j < arr[1].length; j++) {
        if (arr[1][j] != (turn + 1)) {
            flag = false
        }
    }
    if (flag)
        checkSencondRow = flag
    flag = true

    for (j = 0; j < arr[2].length; j++) {
        if (arr[2][j] != (turn + 1)) {
            flag = false
        }
    }
    if (flag)
        checkThirdRow = flag

    //check colum wise
    for (j = 0; j < arr[0].length; j++) {
        if (arr[j][0] != (turn + 1)) {
            flag_2 = false
        }
    }
    if (flag_2)
        checkFirstColum = flag_2
    flag_2 = true

    for (j = 0; j < arr[1].length; j++) {
        if (arr[j][1] != (turn + 1)) {
            flag_2 = false
        }
    }
    if (flag_2)
        checkSencondColum = flag_2
    flag_2 = true

    for (j = 0; j < arr[2].length; j++) {
        if (arr[j][2] != (turn + 1)) {
            flag_2 = false
        }
    }
    if (flag_2)
        checkThirdColum = flag_2
    flag_2 = true

    //first diagonal match
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (i == j) {
                if (arr[i][j] != (turn + 1)) {
                    flag_3 = false
                }
            }
        }
    }
    if (flag_3)
        checkFirstDiagonal = flag_3
    flag_3 = true
    // second diagonal match
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (i + j == arr.length - 1) {
                if (arr[i][j] != (turn + 1)) {
                    flag_3 = false
                }
            }
        }
    }
    if (flag_3)
        checkSencondDiagonal = flag_3
    flag_3 = true

    //print result
    if (checkFirstRow || checkSencondRow || checkThirdRow || checkFirstColum || checkSencondColum || checkThirdColum || checkFirstDiagonal || checkSencondDiagonal) {

        win_flag = true
        if (turn == 1) {
            win_tick.style.display = "flex"
        }
        if (turn == 0) {
            win_cross.style.display = "flex"
        }
        if (win_flag == true) {
            won_para.style.display = "block"
            takes_heading.style.display = "block"
            win_state.style.display = "block"

        }
    }
    if (win_flag == true) {
        for (i = 0; i < button.length; i++) {
            button[i].setAttribute("disabled", "");
        }
    }
    if (count == 9) {
        win_state.style.display = "block"
        draw_heading.style.display = "block"
    }
}
quit.addEventListener('click', function (e) {
    e.preventDefault();
    win_state.style.display = "none"
    location.reload();
})




