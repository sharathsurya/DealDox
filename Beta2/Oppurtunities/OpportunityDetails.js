var click5 = document.getElementById('clickmedetails');
click5.addEventListener('click5', myfunctionData);

function myfunctionData() {
  var tablewrap5 = document.getElementById('oppodetails');
  tablewrap5.classList.toggle('hidden1');
};


$("#clickmedetails").click(function () {
  var icon = $(this).find("span");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});


// BILLING AND SHIPPING TABLE JS
var click = document.getElementById('clickme');
click.addEventListener('click', myfunctionA);

function myfunctionA() {
  var tablewrap = document.getElementById('billOne');
  tablewrap.classList.toggle('hidden');
};


var click1 = document.getElementById('clikhere');
click1.addEventListener('click1', myfunctionB);

function myfunctionB() {
  var tablewrap1 = document.getElementById('ship');
  tablewrap1.classList.toggle('hidden');
};

