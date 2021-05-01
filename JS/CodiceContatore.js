let display = document.querySelector(".display");

let temp=0;




function fminum(){
    if(isFinite(temp)){
        temp--;        
    }
    else temp="Ho perso il conto 😞";
   display.innerHTML= temp;
}

function fminum10(){
    if(isFinite(temp)){
        temp=temp-10;        
    }
    else temp="Ho perso il conto 😞";
   display.innerHTML= temp;
}

function fplus(){
    if(isFinite(temp)){
        temp++;        
    }
    else temp="Ho perso il conto 😞";
   display.innerHTML= temp;
}

function fplus10(){
    if(isFinite(temp)){
        temp=temp+10;        
    }
    else temp="Ho perso il conto 😞";
   display.innerHTML= temp;
}

function reset(){
    temp=0;
    display.innerHTML=temp;
}







