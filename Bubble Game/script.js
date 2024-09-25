// MAKE BUBBLE
function bubble() {
    let clutter="";

for(let i=1;i<=167;i++){
var rn=Math.floor(Math.random()*10) 
 clutter +=  ` <div id="bubble">${rn}</div>`
}

document.querySelector("#box3").innerHTML=clutter;
};

bubble();

// RUN THE TIMER
var timer=60;
function timerrun(){
    
    var timeint=setInterval(function () {
        if(timer>0){
        timer--;
        document.querySelector(".timerval").textContent=timer;
    }
    else{
        clearInterval(timeint);
        document.querySelector("#box3").innerHTML=`<h1>Game Over</h1>`;
    }
    }, 1000);
}
timerrun();

//FOR HIT BUTTON
var rn=0;
function hit(){
     rn=Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent=rn;
}
hit();

//INCREASING SCORE
var incscr;
incscr=document.querySelector("#box3").addEventListener("click",(a)=>{
   var clicknum= Number(a.target.textContent);
    if (clicknum===rn) {
        increasescore();
        bubble();
        hit();
    }
})

var score=0;

function increasescore(){
score += 10;
document.querySelector(".scoreval").textContent=score;
}

// increasescore();
    
//reset button

// document.querySelector("#button").addEventListener("click",()=>{
//     document.querySelector(".scoreval").textContent=0;
//     timer=60;
//     bubble();
//     timerrun();
//     hit();
//     incscr;
   
// })