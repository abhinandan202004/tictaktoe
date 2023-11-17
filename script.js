console.log("Welcome to Tik-Tak-Toe ")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("winner.wav")
let turn = "X"
let isGameover = false;

// function to decide whose turn it is
const changeTurn = () =>{

    return turn === "X"? "0": "X"
}

//function to check winner
const winCheck = () => {
   let boxtext = document.getElementsByClassName('boxtext');
   let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
        document.querySelector('.announcer').innerText = boxtext[e[0]].innerText + " Won";
        isGameover = true;
        }
    })

}

//logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            winCheck();
            if(!isGameover){
            document.getElementsByClassName("announcer")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

