var a=document.querySelector(".material-symbols-outlined");
var b=document.querySelector("#inner");
var flag;

a.addEventListener("click",function(){

    
    if(flag==1){
    a.style.transition="all 1s ease"
    a.style.transform="rotate(90deg)"
    a.style.color="white";
    b.style.transform="scaleX(0.2)"
    b.style.transition="all 1s ease"



flag=0;}


    else{
        a.style.transform="rotate(0deg)"
        a.style.color="black";
        b.style.transform="scale(1,1)"
        b.style.transition="all 1s ease"
        flag=1;
    }
})