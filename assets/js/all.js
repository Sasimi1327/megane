"use strict";

var pad = window.matchMedia("(max-width: 992px)");
pad.addListener(checkMenuClose);

function checkMenuClose(pMatchMedia) {
  if (pMatchMedia.matches) {
    console.log("小於992");
  } else {
    console.log("大於992");
  }
}

function openPanel(evt, panelName) {
  // Declare all variables
  var i, tabcontent, tablinks; // Get all elements with class="tabcontent" and hide them

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  } // Get all elements with class="tablinks" and remove the class "active"


  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  } // Show the current tab, and add an "active" class to the button that opened the tab


  document.getElementById(panelName).style.display = "block";
  evt.currentTarget.className += " active";
}
//# sourceMappingURL=all.js.map
