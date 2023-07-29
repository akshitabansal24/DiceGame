var r1=6;
var r2=6;

document.getElementById( "Img1" ).onclick = function() {
    // img clicked
    r1=Math.floor(Math.random()*6)+1;
    if(r1===1){
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
    }else if(r1===2){
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
    }else if(r1===3){
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
    }else if(r1===3){
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
    }else if(r1===5){
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
    }else if(r1===6){
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
    }
    getResult()
};

document.getElementById( "Img2" ).onclick = function() {
    // img clicked
    r2=Math.floor(Math.random()*6)+1;
    if(r2===1){
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
    }else if(r2===2){
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
    }else if(r2===3){
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
    }else if(r2===3){
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
    }else if(r2===5){
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
    }else if(r2===6){
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
    }
    getResult();
};

function getResult(){
    if(r1>r2){
        document.querySelector("h1").innerHTML="Player 1 wins!";
    }else if(r2>r1){
        document.querySelector("h1").innerHTML="Player 2 wins!";
    }else{
        document.querySelector("h1").innerHTML="Draw!";
    }
}