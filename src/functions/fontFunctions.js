// import "./consts/colors";

// Basic Colors used
const primary__ = "#1564bf";
const hover__ = "#5e91f2";
const selected__ = "#003b8e";
//import { cdnLink } from "../consts.js";
const cdnLink =
  "https://cdn.jsdelivr.net/gh/HarikrishnanMidhun77/staccess@e8cd984fbe5e6c777a8afd9cc4b5e76bf9cf1f9d/";

const staccess__dyslexiaFont__flag = false;
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function dyslexiaFontSwitch() {
  if (
    getCookie("staccess__dyslexiaFont") == "true" ||
    staccess__dyslexiaFont__flag == true
  ) {
    removeFont();
  } else {
    applyDyslexicFont();
  }
}
function applyDyslexicFont() {
  var dyslexicRegular = cdnLink + "src/fonts/dyslexic-regular.otf"; //new URL("fonts/dyslexic-regular.otf", document.baseURI).href;
  var dyslexicMono = cdnLink + "src/fonts/dyslexic-mono.otf"; //new URL("fonts/dyslexic-mono.otf", document.baseURI).href;
  var style1 = document.createElement("style");
  style1.id = "staccess-widget-font";
  style1.innerHTML =
    "@font-face {\n        font-family: dyslexic-regular;\n        src : url('"
      .concat(
        dyslexicRegular,
        "');\n    }\n    @font-face {\n        font-family: dyslexic-mono;\n        src: url('"
      )
      .concat(dyslexicMono, "');\n    }");
  var style2 = document.createElement("style");
  style2.id = "staccess-widget-font2";
  style2.innerHTML =
    "\n    html {\n        font-family: dyslexic-regular;\n    }\n    p, a, h1, h2, h3, h4, h5, input, ul, span, font, strong, th, td {\n        font-family: dyslexic-regular, FontAwesome !important;\n        line-height: 150%;\n    }\n    *:not(i):not(.fa) {\n        font-family: dyslexic-regular !important;\n    }\n    pre, code, pre *, code * {\n        font-family: dyslexic-mono !important;\n        line-height: 150%;\n    }";
  document.head.appendChild(style1);
  document.head.appendChild(style2);
  document.cookie = "staccess__dyslexiaFont=true;  path=/";
  document.getElementById("staccess__dyslexiaFont__btn").style.background =
    selected__;

  staccess__dyslexiaFont__flag = true;
}
function removeFont() {
  console.log("in remove font");
  document.head
    .querySelectorAll("style#staccess-widget-font")
    .forEach((item, key) => item.remove());
  document.head
    .querySelectorAll("style#staccess-widget-font2")
    .forEach((item, key) => item.remove());

  document.cookie = "staccess__dyslexiaFont=false;  path=/";
  staccess__dyslexiaFont__flag = false;
  document.getElementById("staccess__dyslexiaFont__btn").style.background =
    primary__;

  var css = "button.tile__:hover{ background-color:" + hover__ + " }";
  var style = document.createElement("style");
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName("head")[0].appendChild(style);
}
