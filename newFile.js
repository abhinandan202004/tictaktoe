Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innertext = turn;
            turn = changeTurn();
            audioturn.play();
            winCheck();
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;

        }
    });
});
