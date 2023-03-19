//your code here
var btn=document.getElementById("btn");
var randomNum;
function generateRandomNumber(){
    alert("Button Clicked");
     randomNum= (Math.random * 40)-20;
    findGuessCloseToNumber();
}

function findGuessCloseToNumber()
{
     input=Number(document.querySelector("guess").value);
    if((Math.abs(input-randomNum))>=5)
    {
        document.querySelector("respond").textContent="Cold";
    }
    else
    {
        document.querySelector("respond").textContent="Hot";
    }
}
btn.addEventListener("click",generateRandomNumber);

