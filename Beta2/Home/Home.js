
// HOME BUTTON TABS TOGGLE JS

var header = document.getElementById("myDIV");
    var btns = document.getElementsByClassName("bt");
    for (var i = 0; i<btns.length; i++) {
       btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
     });
     }
     var header = document.getElementById("myDIV2");
     var btns = document.getElementsByClassName("bts");
     for (var i = 0; i<btns.length; i++) {
    btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activ");
    current[0].className = current[0].className.replace(" activ", "");
    this.className += " activ";
 });
  }


//   HOME PAGE SIDEBAR JS
const sidebarToggle = document.querySelector('.sidebarhome-toggle');
const container = document.querySelector('.containerhome');

sidebarToggle.addEventListener('click', function () {
    container.classList.toggle('sidebarhome-open');
    if (container.classList.contains('sidebarhome-open')) {
        sidebarToggle.textContent = '>';
        sidebarToggle.style.right = '250px'; /* Width of the sidebar plus margin */
    } else {
        sidebarToggle.textContent = '<';
        sidebarToggle.style.right = '0px';
    }
});

