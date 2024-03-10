let boxes = document.querySelectorAll(".box"); // to acces the all the boxes buttons
let reset=document.querySelector(".reset-btn"); // To acces the rest button
let msgContainer=document.querySelector(".msg-container"); // To acces the msg container (div)
let msg = document.querySelector("#msg"); // To acces the message (para tag)
let newBtn = document.querySelector("#new-btn");  //To access the new game button
let count=0; //for draw game

// winning combinations
let winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


let turn0 =true;


// for giving the turns of players

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            box.style.color="green";
            turn0=false;
        }
        else{
            box.innerText="X";
            box.style.color="blue";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

//enabling the boxes

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

for(let box of boxes){
    if(box.clicked){
        count++;
    }
    if(count==9 && checkWinner==false)
    {
        msg.innerText="The game is drawn";
        console.log(count);
    }
}

// reset button and new gmae button
const resetBoxes=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


// disabling the boxes
const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

// To show the winner Text
function showWinner(winner){
    msg.innerText= `Congratulations , You are the winner ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes()
}

// for checking the winner
const checkWinner = ()=>{
    for(let pattern of winningPattern){
        let pos1_Val1 = boxes[pattern[0]].innerText;
        let pos2_Val2 = boxes[pattern[1]].innerText;
        let pos3_Val3 = boxes[pattern[2]].innerText;

        if(pos1_Val1 !="" && pos2_Val2 != "" && pos3_Val3 != ""){
            if(pos1_Val1 == pos2_Val2 && pos3_Val3 == pos2_Val2){
                showWinner(pos1_Val1);
            }
        }

    }
};
reset.addEventListener("click",resetBoxes); // reset button event handler
newBtn.addEventListener("click", resetBoxes); // new game button event handler