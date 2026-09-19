let game = document.querySelectorAll(".box");
let message = document.querySelector("#message");
let reset = document.querySelector("#reset");


let turnO = true;


let winPatter = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6],
];


game.forEach((element) => {
    element.addEventListener("click" , () => {
        if(turnO){
            element.innerText = "O";
            turnO = false;
        }
        else{
            element.innerText = "X";
            turnO = true;
        }
        element.disabled = true;

        checkWinner();
    })
})



function checkWinner(){
    for(let pattern of winPatter) {
    if(
        game[pattern[0]].innerText !== "" &&
        game[pattern[0]].innerText === game[pattern[1]].innerText &&
        game[pattern[1]].innerText === game[pattern[2]].innerText
    ){
        message.innerText = game[pattern[0]].innerText + " wins!";
        disabledGame();
    }
}
}


function disabledGame() {
    game.forEach((element) => {
        element.disabled = true;
    });

}


reset.addEventListener("click" , () => {
    game.forEach((element) => {
        element.innerText = "";
        element.disabled = false ;
    })

    turnO = true ;
    message.innerText = "" ;
});