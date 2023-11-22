let randomnumber=(parseInt(Math.random()*100+1))

const submit=document.querySelector("#submitGuess")
const userInput=document.querySelector("#guessNumber");
const guessSlot=document.querySelector("#guesses")
const remaining=document.querySelector("#remaining-guesses");
const loworhigh=document.querySelector(".loworhigh")
const startover=document.querySelector(".resultpars")

const p=document.createElement("p")

let prevguess=[]
let numguess=1
let playgame=true


if(playgame)
{
    submit.addEventListener('click',function(e)
    {
        e.preventDefault();
        var guess = parseInt(userInput.value);
        console.log(guess)
        validGuess(guess);
    })
}

function validGuess(guess)
{
    if(isNaN(guess))
    {
        alert("please enter valid number")
    }
    else if(guess<1)
    {
alert("please enter number greater than 1")
    }
    else if(guess>100)
    {
        alert("please enter number less than 100")
    }
    else
    {
        prevguess.push(guess);
        if(numguess===11)
        {
            displayGuess(guess);
            displayMessage(`Game Over. Randomnumber was ${randomnumber}`)
            endgame()
        }
        else
        {
         displayGuess(guess)
         checkGuess(guess)   
        }
    }

}
function checkGuess (guess)
{

    if(guess===randomnumber)
    {
        displayMessage('you guessed it right!!')
        endgame()
    }
    else if(guess<randomnumber)
    {
        displayMessage('number is too low!!')
    }
    else if(guess>randomnumber)
    {
        displayMessage('number is too high!!')
    }

}
function displayGuess(guess) {
    
    userInput.value=''
    guessSlot.innerHTML+=`${guess} ,`
    numguess++;
    remaining.innerHTML=`${11-numguess}`
}
function displayMessage(message) {
    loworhigh.innerHTML=`<h2>${message}</h2>`
}


function endgame() {
    userInput.value=""
    userInput.setAttribute('disabled','')
   

    p.classList.add("button")
    p.innerHTML=`<h2 id="newgame">Start New Game</h2>`;
    // p.style.padding="10px 20px"
    // p.style.border="1px solid black"
    // p.style.backgroundColor="black"
    // p.style.color="white"
    startover.appendChild(p)
    playgame=false
    newgame()
}
function newgame() {
    
    const newgame=document.querySelector("#newgame")
    newgame.addEventListener('click',function(e)
    {
     randomnumber=(parseInt(Math.random()*100+1))
     prevguess=[]
     numguess=1
     loworhigh.innerHTML=""
      guessSlot.innerHTML=""
    remaining.innerHTML=`${11-numguess}`
userInput.removeAttribute("disabled")
startover.removeChild(p)
playgame=true
    })
}
