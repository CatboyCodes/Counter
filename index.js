addButton = document.querySelector(".add")
score = document.querySelector(".score")
subButton = document.querySelector(".sub")
resetButton = document.querySelector(".reset")

addButton.addEventListener("click", increment);
subButton.addEventListener("click", decrement);
resetButton.addEventListener("click", reset);

function increment(){
    let displayscore = score.textContent;
    displayscore = parseInt(displayscore)
    displayscore = displayscore + 1;
    score.innerHTML = displayscore;
}

function decrement(){
    let displayscore = score.textContent;
    displayscore = parseInt(displayscore)
    if (displayscore < 1){
        alert("You cannot go below 0")
    }
    else{
    displayscore = displayscore - 1;
    score.innerHTML = displayscore;
    }
}

function reset(){
    let user = confirm("Are you sure?")
    if (user){
    let displayscore = score.textContent;
    displayscore = parseInt(displayscore)
    displayscore = 0;
    score.innerHTML = displayscore;
    }
}