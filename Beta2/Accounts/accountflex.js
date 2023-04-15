
    function myFunction2() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("mySearch");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myMenu");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }

    //js to copy content of Intternal Id
    function copyText() {
      // Get the anchor tag
      const link = document.getElementById('myId');
      
      // Create a range object and select the link element
      const range = document.createRange();
      range.selectNode(link);
      
      // Get the link URL from the href attribute
      const linkUrl = link.href;
      
      // Create a temporary input element to hold the link URL
      const tempInput = document.createElement('input');
      tempInput.setAttribute('value', linkUrl);
      document.body.appendChild(tempInput);
      
      // Select the input element and copy its value to the clipboard
      tempInput.select();
      document.execCommand('copy');
      
      // Remove the temporary input element
      document.body.removeChild(tempInput);
    }

     //js to copy Link of that is auto generated
    function copyLink(){
      const link = document.getElementById('myLink');
  
      // Create a range object and select the link element
      const range = document.createRange();
      range.selectNode(link);
      
      // Get the link URL from the href attribute
      const linkUrl = link.href;
      
      // Create a temporary input element to hold the link URL
      const tempInput = document.createElement('input');
      tempInput.setAttribute('value', linkUrl);
      document.body.appendChild(tempInput);
      
      // Select the input element and copy its value to the clipboard
      tempInput.select();
      document.execCommand('copy');
      
      // Remove the temporary input element
      document.body.removeChild(tempInput);
    }
  





  