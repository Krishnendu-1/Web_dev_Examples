var a=document.querySelector("i");
var b=document.querySelector("div");
var flag;
b.addEventListener("dblclick",function(){
    a.style.color="blue";
    a.style.transform='scale(2)';//grow eqaully
    a.style.transition='all 1s ease';
flag=1;
    
    var c=setTimeout(() => {
        if(flag==1){
        a.style.transform='scale(0)';
        // clearTimeout(c);
        // alert('you liked the picture!!');
        }
        else{
        clearTimeout(c);
        alert('you liked the picture!!');
    }
    }, 2000)})

