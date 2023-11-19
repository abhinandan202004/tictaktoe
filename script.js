console.log("Welcome to Tik-Tak-Toe ")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("winner.wav")
let game = new Audio("game.mp3")
let turn = "X"
let isGameover = false;

// function to decide whose turn it is
const changeTurn = () =>{

    return turn === "X"? "O": "X"
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
        document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "20vw";
        }
    })

}



//logic
//game.play();
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
button.addEventListener('click' ,() => {
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(Element => {
        Element.innerText=""
    });
    turn = "X";
    isGameover = false;
    document.getElementsByClassName("announcer")[0].innerText = "Turn for " + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0vw";


});

