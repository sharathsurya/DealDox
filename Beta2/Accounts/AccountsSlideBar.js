// files upload in sidebar files section

function displayFileName() {
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');

    for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];



        // Create list item to hold file name, download button, check button, and delete button
        const li = document.createElement('li');
        li.id = "savedFileList";



        // Create link to download the file
        const downloadLink = document.createElement('a');
        downloadLink.id = "downloadFile";
        downloadLink.setAttribute('href', window.URL.createObjectURL(file));
        downloadLink.setAttribute('download', file.name);
        downloadLink.textContent = file.name;
        li.appendChild(downloadLink);



        // Create check button to mark file for deletion
        const checkIcon = document.createElement('i');
        checkIcon.classList.add('fa', 'fa-check', 'file-check-icon');
        checkIcon.id = 'checkFile';
        li.appendChild(checkIcon);



        const downloadIcon = document.createElement('i');
        // downloadIcon.classList.add('fa', 'fa-download', 'file-download-icon');
        downloadIcon.id = 'downloadFile';
        downloadIcon.addEventListener('click', () => {
            const url = window.URL.createObjectURL(file);
            const a = document.createElement('a');
            a.href = url;
            a.download = file.name; // Set the download attribute
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        });
        li.appendChild(downloadIcon);



        const deleteIcon = document.createElement('i');
        // deleteIcon.classList.add('fa', 'fa-trash', 'file-delete-icon');
        deleteIcon.id = "deleteFile";
        li.appendChild(deleteIcon);



        fileList.appendChild(li);



        // Set up event listener for the check icon
        checkIcon.addEventListener('click', () => {
            if (checkIcon.classList.contains('fa-check')) {
                checkIcon.classList.remove('fa-check');
                checkIcon.classList.add('fa-times');
                checkIcon.style.color = "red";
            } else {
                fileList.removeChild(li);
            }
        });

        // Clear the file input
        fileInput.value = '';
    }
}