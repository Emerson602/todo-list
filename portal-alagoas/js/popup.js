let myFunction = setTimeout(function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}, 150000); 

function autoRefresh() {

  window.location = window.location.href;
} setInterval('autoRefresh()',300000);



function myFunctionX() {

    document.getElementById("c-popup").style.display = "none";       

  }