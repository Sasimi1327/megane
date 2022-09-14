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
//# sourceMappingURL=all.js.map
