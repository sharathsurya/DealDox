

// dropdown Of SideBar of OppurtunityData-HtmlPage

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// starting files upload in accounts sidebar jS
// FILE UPLOADING WITH DELETE AND DOWNLOAD OPTION

const uploadBtn = document.getElementById('upload-btn');
const todoList = document.getElementById('todo-list');

uploadBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const files = document.getElementById('upload-file').files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const listItem = document.createElement('li');
    listItem.setAttribute('id', 'todoList');
    const fileName = document.createTextNode(file.name);

    // FILE DOWNLOAD BUTTON WITH ICON

    const downloadBtn = document.createElement('button');
    downloadBtn.setAttribute('id', 'upload-btn1');
    const downloadBtnIcon = document.createElement('i');
    downloadBtnIcon.classList.add("fa", "fa-download");
    downloadBtn.insertBefore(downloadBtnIcon, downloadBtn.firstChild);
    // downloadBtn.innerText = 'Download';
    downloadBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = URL.createObjectURL(file);
    });

    // FILE DELETE BUTTON WITH ICON 

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', 'upload-btn2');
    const deleteBtnIcon = document.createElement('i');
    deleteBtnIcon.classList.add("fa", "fa-trash");
    deleteBtn.insertBefore(deleteBtnIcon, deleteBtn.firstChild);
    // deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', function (e) {
      e.preventDefault();
      listItem.remove();
    });

    listItem.appendChild(fileName);
    listItem.appendChild(downloadBtn);
    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);
    // downloadBtnIcon.appendChild(downloadBtn);
  }
});


updateList = function () {
  var input = document.getElementById('upload-file');
  var output = document.getElementById('fileList');

  output.innerHTML = '<table>';
  for (var i = 0; i < input.files.length; i++) {
    output.innerHTML += '<tbody>' + input.files.item(i).name + '</tbody>';

  }
  output.innerHTML += '</table>'
}
