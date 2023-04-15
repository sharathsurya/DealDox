// Start Of Expand And shrink Fun js 

function expandFullWidth() {
  let expand = document.getElementById('leftsideguide');
  let penc = document.getElementById('pencil');
  let lab = document.getElementById('answer');
  let config = document.getElementById('config');
  let mainContent = document.getElementById('mainContent');
  let main1 = document.getElementById('main');
  let sideBar = document.getElementById('mySidebar');
  let leftBtn = document.getElementById('leftBtn');
  let gridv = document.getElementById('gridID');


  gridv.style.marginTop="70px";
  gridv.style.transition=".0s ease";

  //Main Content Shrink section js
  mainContent.style.width = "0%";
  mainContent.style.display = "none"
  main1.style.display = "none";
  sideBar.style.display = "none";
  leftBtn.style.display = "none";
  
  //label section of pencil
  lab.style.display = "block";
  lab.style.marginRight = "-80px";
  lab.style.marginTop = "11px";
  lab.style.fontSize = "10px";
  lab.style.transition = ".8 ease";
  lab.style.float = "right";


  //pencil section js
  penc.style.display = "block";
  penc.style.float = "right";
  penc.style.marginTop = "-17px";
  penc.style.marginRight = "35px";
  penc.style.fontSize = "20px";
  penc.style.opacity = "0.5";

  //icon section js
  expand.style.width = "100%";


  let hide = document.getElementById('hideOnExpand');
  hide.style.display = "none";
  let show = document.getElementById('questions');
  show.style.display = "block";

  // config label ja section
  config.style.display = "none";
}
function strinkwidth() {
  let strink = document.getElementById('leftsideguide');
  strink.style.width = "40%";
  let penc = document.getElementById('pencil');
  penc.style.display = "none";
  let lab = document.getElementById('answer');
  lab.style.display = "none";
  strink.style.transition = ".8s ease";
  let hide = document.getElementById('hideOnExpand');
  hide.style.display = "block"
  let show = document.getElementById('questions');
  show.style.display = "none"
  let config = document.getElementById('config');
  config.style.display = "block";
  let mainContent = document.getElementById('mainContent');
  mainContent.style.width = "100%";
  mainContent.style.display = "block";
  let main1 = document.getElementById('main');
  main1.style.display = "block";
  let sideBar = document.getElementById('mySidebar');
  sideBar.style.display = 'block';
  let leftBtn = document.getElementById('leftBtn');
  leftBtn.style.display = "block";
  let gridv = document.getElementById('gridID');
  gridv.style.marginTop="0px";
  gridv.style.transition=".0s ease";

 
}

// End Of Expand And shrink Fun js 

// start of Dynamicaly adding Questions section Js

const sectionContainer = document.getElementById("section-container");
const addSectionBtn1 = document.getElementById("add-section-btn");
let sectionCount = 0;


addSectionBtn1.addEventListener("click", () => {
  sectionCount++;
  const section = document.createElement("div");
  section.classList.add("section");

  const sectionHeader = document.createElement("div");
  sectionHeader.classList.add("section-header");

  const sectionNumber = document.createElement("span");
  sectionNumber.classList.add("section-number");
  sectionNumber.innerText = `${sectionCount}`;

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("inputDiv");
  const sectionInput = document.createElement("input");
  sectionInput.setAttribute("id", "guideInput");
  sectionInput.type = "text";
  sectionInput.placeholder = "Enter section content";

  const sectionActions = document.createElement("div");
  sectionActions.classList.add("section-actions");

  const sectionHideLabel = document.createElement("label");
  sectionHideLabel.classList.add("section-hide-checkbox");
  sectionHideLabel.innerText = "Hide";
  const sectionHideCheckbox = document.createElement("input");
  sectionHideCheckbox.type = "checkbox";
  sectionHideCheckbox.name = "hidemenuoption";
  sectionHideCheckbox.classList.add("section-hide-checkbox");
  sectionHideLabel.prepend(sectionHideCheckbox);

  const sectionDeleteBtn = document.createElement("i");
  sectionDeleteBtn.setAttribute("id", "section-delete-btn");
  sectionDeleteBtn.className = "fa-solid fa-trash-can";
  sectionDeleteBtn.addEventListener("click", () => {
    section.remove();
    sectionCount--;
    updateSectionNumbers();
  });

  const sectionUpBtn = document.createElement("i");
  sectionUpBtn.setAttribute("id", "section-up-btn");
  sectionUpBtn.className = "fa-solid fa-arrow-up";
  sectionUpBtn.addEventListener("click", () => {
    const prevSection = section.previousSibling;
    if (prevSection) {
      sectionContainer.insertBefore(section, prevSection);
      updateSectionNumbers();
    }
  });

  const sectionDownBtn = document.createElement("i");
  sectionDownBtn.setAttribute("id", "section-down-btn");
  sectionDownBtn.className = "fa-solid fa-arrow-down";
  sectionDownBtn.addEventListener("click", () => {
    const nextSection = section.nextSibling;
    if (nextSection) {
      sectionContainer.insertBefore(nextSection, section);
      updateSectionNumbers();
    }
  });

  sectionActions.appendChild(sectionHideLabel);
  sectionActions.appendChild(sectionDeleteBtn);
  sectionActions.appendChild(sectionUpBtn);
  sectionActions.appendChild(sectionDownBtn);
  sectionHeader.appendChild(sectionNumber);
  sectionHeader.appendChild(inputDiv);
  inputDiv.appendChild(sectionInput);
  sectionHeader.appendChild(sectionActions);
  section.appendChild(sectionHeader);

  sectionContainer.appendChild(section);
  updateSectionNumbers();
});

function updateSectionNumbers() {
  const sections = sectionContainer.querySelectorAll(".section");
  sections.forEach((section, index) => {
    const sectionNumber = section.querySelector(".section-number");
    sectionNumber.innerText = `${index + 1}`;
  });
}