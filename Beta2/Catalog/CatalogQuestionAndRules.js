const mainSection = document.querySelector("#main-section");
const addSectionBtn = document.querySelector("#add-section-btn");
const sectionsContainer = document.querySelector("#sections-container");


let sectionCount = 0;
let questionCounts = [];
let idCounter = 0;
let addQuestionIncrement = 0;
let addRuleIncrement = 0;

function updateSectionNumbers() {
  const sections = sectionsContainer.querySelectorAll(".section");
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    section.querySelector("h3").innerHTML = `${i + 1}`;
  }
}

function updateQuestionNumbers(questionsContainer, sectionIndex) {
  const questions = questionsContainer.querySelectorAll(".question");
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    question.querySelector("span").innerText = `${sectionIndex + 1}.${i + 1}`;
  }
}

addSectionBtn.addEventListener("click", () => {
  sectionCount++;
  if (!questionCounts[sectionCount - 1]) {
    questionCounts[sectionCount - 1] = 0;
  }

  // let currentId = 1;

  const newSection = document.createElement("div");
  newSection.classList.add("section");
  const newSectionDiv = document.createElement("div");
  newSectionDiv.classList.add("sectionDiv");
  const sectionIcon = document.createElement("p");
  sectionIcon.id = "sectionIcon";
  sectionIcon.innerHTML = `<i class = "fa fa-angle-up"></i>`;
  const sectionTitle = document.createElement("h3");
  sectionTitle.setAttribute("id", "section-number");
  sectionTitle.innerHTML = `${sectionCount}`;
  const questionsContainer = document.createElement("div");
  questionsContainer.classList.add("questions-container");

  // Add input field, checkbox, and delete icon to section
  const inputField = document.createElement("input");
  inputField.setAttribute("id", "inputField");
  inputField.type = "text";
  inputField.placeholder = "Enter section title";

  const requiredCheckbox = document.createElement("div");

  requiredCheckbox.innerHTML = `<input id="hidecheckbox" type="checkbox" />
      <span id="hlabel">Hide</span>`;

  const deleteIcon = document.createElement("button");
  deleteIcon.classList.add("deletesection");
  deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';



  let isDeleteIconHighlighted = false;



  deleteIcon.addEventListener("click", () => {
    if (!isDeleteIconHighlighted) {
      deleteIcon.classList.add("highlight");
      isDeleteIconHighlighted = true;
    } else {
      const sectionIndex = Array.prototype.indexOf.call(sectionsContainer.children, newSection);
      newSection.remove();
      questionCounts.splice(sectionIndex, 1);
      updateSectionNumbers();
      for (let i = sectionIndex; i < sectionsContainer.children.length; i++) {
        const section = sectionsContainer.children[i];
        const questionsContainer = section.querySelector(".questions-container");
        updateQuestionNumbers(questionsContainer, i);
      }
      sectionCount--;
    }
  });




  deleteIcon.addEventListener("dblclick", () => {
    const sectionIndex = Array.prototype.indexOf.call(sectionsContainer.children, newSection);
    newSection.remove();
    questionCounts.splice(sectionIndex, 1);
  });

  document.addEventListener("click", (event) => {
    if (!deleteIcon.contains(event.target)) {
      deleteIcon.classList.remove("highlight");
      isDeleteIconHighlighted = false;
    }
  });

  // ------------------------Move Up And Move Down--------------------------------
  const sectionUpBtn = document.createElement("span");
  sectionUpBtn.setAttribute("id", "section-up-btn");
  sectionUpBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
  sectionUpBtn.addEventListener("click", () => {
    const prevSection = newSection.previousSibling;
    if (prevSection) {
      sectionsContainer.insertBefore(newSection, prevSection);
      updateSectionNumbers();
      updateQuestionNumbers();
    }

  });

  const sectionDownBtn = document.createElement("span");
  sectionDownBtn.setAttribute("id", "section-down-btn");
  sectionDownBtn.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`;
  sectionDownBtn.addEventListener("click", () => {
    const nextSection = newSection.nextSibling;
    if (nextSection) {
      sectionsContainer.insertBefore(nextSection, newSection);
      updateSectionNumbers();
      updateQuestionNumbers();
    }

  });

  function updateSectionNumbers() {
    const sections = sectionsContainer.querySelectorAll(".section");
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      section.querySelector("h3").innerHTML = `${i + 1}`;
    }

  }

  function updateQuestionNumbers() {
    const sections = sectionsContainer.querySelectorAll(".section");
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const questionsContainer = section.querySelector(".questions-container");
      const questions = questionsContainer.querySelectorAll(".question");
      for (let j = 0; j < questions.length; j++) {
        const question = questions[j];
        question.querySelector("span").innerText = `${i + 1}.${j + 1}`;
      }
    }

  }

  updateSectionNumbers();
  updateQuestionNumbers();

  // -----------------------------------------------


  newSectionDiv.appendChild(sectionIcon);
  newSectionDiv.appendChild(sectionTitle);
  newSectionDiv.appendChild(inputField);
  newSectionDiv.appendChild(sectionUpBtn);
  newSectionDiv.appendChild(sectionDownBtn);
  newSectionDiv.appendChild(requiredCheckbox);
  newSectionDiv.appendChild(deleteIcon);
  // newSectionDiv.appendChild(sectionTitle);
  newSection.appendChild(newSectionDiv);
  sectionsContainer.appendChild(newSection);

  idCounter++;
  const questionRule = document.createElement("div");
  const elementId = `questionRule${idCounter}`;
  questionRule.id = elementId;

  const qbtn = document.createElement("div");
  qbtn.setAttribute("id", "qbtn");

  const questionBtn = document.createElement("button");
  questionBtn.setAttribute("id", "question");
  questionBtn.innerText = "QUESTION";
  questionBtn.style.background = "#216c98";
  questionBtn.style.color = "white";

  const ruleBtn = document.createElement("button");
  ruleBtn.setAttribute("id", "rule");
  ruleBtn.innerText = "RULES";
  ruleBtn.innerText = "RULES";
  ruleBtn.style.color = "black";

  // js for toggle questions and rules
  // const rules = document.getElementById('rule');
  // const qtn = document.getElementById('question');

  questionBtn.addEventListener("click", function () {
    questionBtn.style.background = "#216c98";
    questionBtn.style.color = "white";

    ruleBtn.style.background = "white";
    ruleBtn.style.color = "black";

    addQuestionBtn.style.display = "block";
    addRuleBtn.style.display = "none";
    questionsContainer.style.display = "block";
  });

  ruleBtn.addEventListener("click", function () {
    ruleBtn.style.background = "#216c98";
    ruleBtn.style.color = "white";


    questionBtn.style.background = "white";
    questionBtn.style.color = "black";


    addRuleBtn.style.display = "block";
    addQuestionBtn.style.display = "none";
    questionsContainer.style.display = "none";

  })

  addQuestionIncrement++;
  const addQuestionBtn = document.createElement("button");
  addQuestionBtn.setAttribute("class", "addQuestion");
  const addQuestionId = `addQuestion${addQuestionIncrement}`;
  addQuestionBtn.id = addQuestionId;
  addQuestionBtn.innerText = "+ADD QUESTION";

  addRuleIncrement++;
  const addRuleBtn = document.createElement("button");
  addRuleBtn.setAttribute("class", "addRule");
  const addRuleId = `addRule${addRuleIncrement}`;
  addRuleBtn.id = addRuleId;
  addRuleBtn.innerText = "+ADD RULE";

  // ....................Question and Rule Hidden JS........................

  function sectionHideShow() {
    const element = document.getElementById(elementId);
    const addId = document.getElementById(addQuestionId);
    const ruleId = document.getElementById(addRuleId);


    if (element.style.display === 'none' && addId.style.display === "none" && ruleId.style.display === "none") {
      element.style.display = 'block';
      addId.style.display = 'block';
      ruleId.style.display = 'none';
      sectionIcon.innerHTML = `<i class="fa fa-angle-up"> </i>`;
    } else {
      element.style.display = 'none';
      addId.style.display = 'none';
      ruleId.style.display = 'none';
      sectionIcon.innerHTML = `<i class="fa fa-angle-down"> </i>`;
    }
  }

  sectionTitle.addEventListener("click", sectionHideShow);
  sectionIcon.addEventListener("click", sectionHideShow);


  newSection.appendChild(questionRule);
  questionRule.appendChild(qbtn);
  qbtn.appendChild(questionBtn);
  qbtn.appendChild(ruleBtn);
  questionRule.appendChild(questionsContainer)
  newSection.appendChild(addQuestionBtn);
  newSection.appendChild(addRuleBtn);

});
sectionsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON" && event.target.innerText === "+ADD QUESTION") {
    // Add question logic
    const section = event.target.parentNode;
    const sectionIndex = Array.prototype.indexOf.call(sectionsContainer.children, section);
    const questionsContainer = section.querySelector(".questions-container");
    const questionCount = questionsContainer.children.length;
    questionCounts[sectionIndex] = questionCount;

    const newQuestion = document.createElement("div");
    newQuestion.classList.add("question");
    newQuestion.innerHTML = `
          <span class="subSection">${sectionIndex + 1}.${questionCount + 1}</span>
          <input type="text" placeholder="Enter your question" />
          <button class="infoicon-btn"><i class="fa fa-info-circle"></i></button>
          <label>
            <input type="checkbox" />
            <span style="font-size:11px;">Required</span>
          </label>
          <select class="questionSelect">
            <option value="option1">TOGGLE</option>
            <option value="option2">Yes/No</option>
            <option value="option3">Option 3</option>
          </select>
          <button class="copyicon-btn"><i class="fa fa-clone"></i></button>
          <button class="delete-btn" id="delbtn"><i class="far fa-trash-alt" id="qDel"></i></button>
        `;


    document.addEventListener("click", (event) => {
      const qDel = document.querySelectorAll("#qDel");
      qDel.forEach((i) => {
        if (i !== event.target) {
          i.classList.remove("highlighted");
        }
      });
    });

    // ---------moveup and movedown in question section---------------

    const questionUpBtn = document.createElement("span");
    questionUpBtn.setAttribute("id", "section-up-btn");
    questionUpBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
    questionUpBtn.addEventListener("click", () => {
      const prevQuestion = newQuestion.previousSibling;
      if (prevQuestion) {
        questionsContainer.insertBefore(newQuestion, prevQuestion);
        //  updateSectionNumbers();
        updateQuestionNumbers();
      }
    });

    const questionDownBtn = document.createElement("span");
    questionDownBtn.setAttribute("id", "section-down-btn");
    questionDownBtn.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`;
    questionDownBtn.addEventListener("click", () => {
      const nextQuestion = newQuestion.nextSibling;
      if (nextQuestion) {
        questionsContainer.insertBefore(nextQuestion, newQuestion);
        //  updateSectionNumbers();
        updateQuestionNumbers();
      }
    });

    function updateSectionNumbers() {
      const sections = sectionsContainer.querySelectorAll(".section");
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        section.querySelector("h3").innerHTML = `${i + 1}`;
      }
    }

    function updateQuestionNumbers() {
      const sections = sectionsContainer.querySelectorAll(".section");
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const questionsContainer = section.querySelector(".questions-container");
        const questions = questionsContainer.querySelectorAll(".question");
        for (let j = 0; j < questions.length; j++) {
          const question = questions[j];
          question.querySelector("span").innerText = `${i + 1}.${j + 1}`;
        }
      }
    }

    updateSectionNumbers();
    updateQuestionNumbers();

    // -------------------------------------------------------------
    newQuestion.appendChild(questionUpBtn)
    newQuestion.appendChild(questionDownBtn)
    questionsContainer.appendChild(newQuestion);



    document.addEventListener("click", (event) => {
      const qDel = document.querySelectorAll("#qDel");
      qDel.forEach((i) => {
        if (i !== event.target) {
          i.classList.remove("highlighted");
        }
      });
    });

    // Update question numbers for subsequent questions in the same section
    for (let i = questionCount; i < questionsContainer.children.length; i++) {
      const question = questionsContainer.children[i];
      question.querySelector("span").innerText = `${sectionIndex + 1}.${i + 1}`;
    }
  } else if (event.target.closest(".delete-btn")) {
    const question = event.target.closest(".question");
    const section = event.target.closest(".section");
    const deleteButton = event.target;


    if (deleteButton.classList.contains("highlighted")) {
      // If the delete button is already highlighted, remove the question
      const sectionIndex = Array.prototype.indexOf.call(sectionsContainer.children, section);
      question.remove();
      questionCounts[sectionIndex]--;
      const questionsContainer = section.querySelector(".questions-container");
      const questions = questionsContainer.querySelectorAll(".question");
      for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        question.querySelector("span").innerText = `${sectionIndex + 1}.${i + 1}`;
      }
      deleteButton.classList.remove("highlighted");
    } else {
      // If the delete button is not highlighted, add the "highlighted" class
      deleteButton.classList.add("highlighted");
    }
  }
});
