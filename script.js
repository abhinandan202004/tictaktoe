console.log("Welcome to Tik-Tak-Toe ")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("winner.wav")
let turn = "X"

// function to decide whose turn it is
const changeTurn = () =>{

    return turn === "X"? "0": "X"
}

//function to check winner
const winCheck = () => {

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
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    });
});

