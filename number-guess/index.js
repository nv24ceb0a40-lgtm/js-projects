
const min=document.getElementById("min");
const max=document.getElementById("max");
const submitRange=document.getElementById("submitRange");
const guess=document.getElementById("guess");
const submitGuess=document.getElementById("submitGuess");
let guessStatus=document.getElementById("status");
let secretNum;
submitRange.addEventListener("click",()=>{

    const minmum=Number(min.value);
    const maximum=Number(max.value);
    secretNum=Math.floor( Math.random()*(maximum-minmum+1) + minmum );
    console.log(secretNum);
})
const resetGame=()=>{
     min.value = "";
    max.value = "";
    guess.value = "";
}
submitGuess.addEventListener("click",()=>{

    let guessNum=Number(guess.value);
    if(guessNum>secretNum)
    {
        guessStatus.textContent="lower";
    }
    else if(guessNum<secretNum)
    {
        guessStatus.textContent="higher"
    }
    else
    {
        guessStatus.textContent=`you guessed it & game resets`;
        resetGame();
    }
})