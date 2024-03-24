let boxes =document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;   //player0,player X

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =()=>{
turn0 = true;
enableBoxes();
msgContainer.classList.add("hide");

};

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(turn0 == true){
            box.innerText = "O";
            turn0 =false;
        }
        else{
            box.innerText = "X";
            turn0 =true;
        }
        box.disabled=true;

        checkWinner();
    });

});

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled =true;
    }
};

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText = "";
    }
};


const showWinner = (Winner) => {
    msg.innerText=`Congratulation, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () =>{
    for(let pattern of winPatterns){
        
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;

        //check empty
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                
                showWinner(pos1val);
            }
        }
    }
};

newGamebtn.addEventListener("click" ,resetGame);
resetbtn.addEventListener("click" ,resetGame);