let usrScore = 0;
let compScore = 0;
let msg=document.querySelector(".msg");
let usr= document.querySelector(".you");
let comp= document.querySelector(".comp");
let choices = document.querySelectorAll(".choice");
let randomChoice = () => { 
    let options = ["rock","paper","scissors"];
    let index=Math.floor(Math.random()* 3);
    return options[index];
}
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log("choice was clicked");
    let usrChoice = choice.getAttribute("id");
    compChoice = randomChoice();
    console.log("User Choice=",usrChoice);
    console.log("Computer Choice=",compChoice);
    let usrWin;
    if(usrChoice===compChoice)
    {   
        usrWin=null;
    }
    else
    {
        if(usrChoice==="rock")
        {
           usrWin= compChoice==="paper"?false:true;
        }
        else if(usrChoice==="paper")
        {
            usrWin= compChoice==="scissors"?false:true;
        }
        else if(usrChoice==="scissors")
        {
            usrWin= compChoice==="rock"?false:true;
        }
    }
    if(usrWin)
        {
            console.log("user won");
            msg.innerText="User Won";
            usrScore++;
            usr.innerText =usrScore;
            msg.style.backgroundColor= "green";
        }
        else if(usrWin===null)
        {
            console.log("Its draw");
            msg.innerText="Its a draw";
            msg.style.backgroundColor= "#50858B";
        }
        else{
            console.log("Comp won");
            msg.innerText="Computer Won";
            compScore++;
            comp.innerText =compScore;
            msg.style.backgroundColor= "red";
        }
        
  });
});

