function myFunctionAccess(){
    var dots=document.getElementById("dotsaccess");
    var moreText=document.getElementById("moreaccess");
    var btnText=document.getElementById("myBTNaccess");

    if(dots.style.display==="none"){
       dots.style.display="inline";
       btnText.innerHTML="VIEW MORE";
       moreText.style.display="none";
    }
    else{
        dots.style.display="none";
        btnText.innerHTML="VIEW LESS";
        moreText.style.display="inline";
    }
}