function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  
  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn1")) {
      var dropdowns = document.getElementsByClassName("dropdown1-content");
      var j;
      for (j = 0; j < dropdowns.length; j++) {
        var openDropdown = dropdowns[j];
        if (openDropdown.classList.contains("show1")) {
          openDropdown.classList.remove("show1");
        }
      }
    }
  };
  
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn2")) {
      var dropdowns = document.getElementsByClassName("dropdown2-content");
      var j;
      for (j = 0; j < dropdowns.length; j++) {
        var openDropdown = dropdowns[j];
        if (openDropdown.classList.contains("show2")) {
          openDropdown.classList.remove("show2");
        }
      }
    }
  };
  
  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn3")) {
      var dropdowns = document.getElementsByClassName("dropdown3-content");
      var j;
      for (j = 0; j < dropdowns.length; j++) {
        var openDropdown = dropdowns[j];
        if (openDropdown.classList.contains("show3")) {
          openDropdown.classList.remove("show3");
        }
      }
    }
  };
  
  function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show4");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn4")) {
      var dropdowns = document.getElementsByClassName("dropdown3-content");
      var j;
      for (j = 0; j < dropdowns.length; j++) {
        var openDropdown = dropdowns[j];
        if (openDropdown.classList.contains("show4")) {
          openDropdown.classList.remove("show4");
        }
      }
    }
  };


 // support button
document.getElementById("fixedButton").addEventListener("click", function() {
  alert("Yahaa support nhi milta");
});

