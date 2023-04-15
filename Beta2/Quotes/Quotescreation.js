
// var click = document.getElementById('showicon');
// click.addEventListener('click', myfunctionH);
// function myfunctionH() {
// var tablewrap = document.getElementById('iconhide');
// tablewrap.classList.toggle('hiddenH');
// };

let iconclick = document.getElementById('showicon');
let showForm = document.getElementById('iconhide');

showForm.style.display="none";

function displayForm(){
    if(showForm.style.display=="none"){

        showForm.style.display="block"; 
        showForm.style.marginTop="20px";
        showForm.style.marginLeft="15px"; 
     }
     else {
        showForm.style.display="none"; 
     }
    
}
