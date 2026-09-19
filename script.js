let boxes = document.querySelectorAll(".box");
let message = document.querySelector("#message");
let reset = document.querySelector("#reset-btn");

let turnO = true ;

let winnerPattern = [
    [0 , 1 ,2],
    [3 , 4 ,5],
    [6 , 7 ,8],
    [0 , 3 ,6],
    [1 , 4 ,7],
    [2 , 5 ,8],
    [0 , 4 ,8],
    [2 , 4 ,6]

]


boxes.forEach(element => {
    element.addEventListener("click" , () =>{
        if(turnO === true){
        element.innerText = "O";
        turnO = false ;
    }
    else{
        element.innerText = "X";
        turnO = true;
    }

    element.disabled = true;

    checkWinner();

    })
    
    
});


const checkWinner =() => {
    for(let pattern of winnerPattern){

        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if(p1 !== "" && p1 ===p2 && p2 === p3){
            message.innerText = boxes[pattern[0]].innerText + " is winner";
            disabledGame() ;
        }
    
    }
}


const disabledGame = () =>{
    boxes.forEach((element) =>{
        element.disabled = true ;
    });
    
}


reset.addEventListener("click" , () =>{
    boxes.forEach((element) =>{
        element.innerText = "";
        element.disabled = false;
    })
    turnO = true ;
    message.innerText = "" ;
})