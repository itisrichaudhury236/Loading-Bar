const counterE1=document.querySelector(".counter");

const barE1=document.querySelector(".loading-bar-front");


//counterE1.innerText ="100%"
let idx = 0;
updateNumb();

function updateNumb(){
    counterE1.innerText= idx +"%"
    barE1.style.width =idx +"%";
    idx++;
    if(idx < 101){
        setTimeout(updateNumb,20)
    }
}