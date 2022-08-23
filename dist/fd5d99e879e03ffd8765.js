// import "./consts/colors";

// Basic Colors used
const primary__ = "#1564bf";
const hover__ = "#5e91f2";
const selected__ = "#003b8e";
//import { cdnLink } from "../consts.js";
const cdnLink =
  "https://cdn.jsdelivr.net/gh/HarikrishnanMidhun77/staccess@e8cd984fbe5e6c777a8afd9cc4b5e76bf9cf1f9d/";

var staccess__dyslexiaFont__flag = false;
var font_size_count = 0,
  font_size_direction = 1;
var letter_spacing_count = 0,
  letter_spacing_direction = 1;
var line_height_count = 0,
  line_height_direction = 1;

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
function changeFontSize() {
  if (font_size_count < 4 && font_size_direction == 1) {
    font_size_count++;
    document.getElementById("staccess__fontsize__btn").style.background =
      selected__;
    if (font_size_count == 4) font_size_direction = 0;
    let items = document.querySelectorAll("*");
    var tagsToRemove = ["IMG", "SCRIPT", "STYLE", "IFRAME"];
    items.forEach((item, key) => {
      if (!tagsToRemove.includes(item.tagName) && item.innerText != "") {
        let itemFont = window
          .getComputedStyle(item)
          .getPropertyValue("font-size");
        item.style.setProperty(
          "font-size",
          `${parseFloat(itemFont) + 3}px`,
          "important"
        );
      }
    });
  } else {
    if (font_size_direction == 0) {
      font_size_count--;
      if (font_size_count == 0) {
        font_size_direction = 1;
        document.getElementById("staccess__fontsize__btn").style.background =
          primary__;
      }
      let items = document.querySelectorAll("*");
      var tagsToRemove = ["IMG", "SCRIPT", "STYLE", "IFRAME"];
      items.forEach((item, key) => {
        if (!tagsToRemove.includes(item.tagName) && item.innerText != "") {
          let itemFont = window
            .getComputedStyle(item)
            .getPropertyValue("font-size");
          item.style.setProperty(
            "font-size",
            `${parseFloat(itemFont) - 3}px`,
            "important"
          );
        }
      });
    }
  }
}

function changeLetterSpacing() {
  if (letter_spacing_count < 4 && letter_spacing_direction == 1) {
    letter_spacing_count++;
    document.getElementById("staccess__letterspacing__btn").style.background =
      selected__;
    if (letter_spacing_count == 4) letter_spacing_direction = 0;
    var style = document.createElement("style");
    style.id = "ta-a11y-works-widget-letter-spacing";
    style.innerHTML =
      `body *{letter-spacing:` + (letter_spacing_count + 1) + `px !important;}`;
    document.head.appendChild(style);
  } else {
    if (letter_spacing_direction == 0) {
      letter_spacing_count--;
      if (letter_spacing_count == 0) {
        letter_spacing_direction = 1;
        document.getElementById(
          "staccess__letterspacing__btn"
        ).style.background = primary__;
      }
      var style = document.createElement("style");
      style.id = "ta-a11y-works-widget-letter-spacing";
      style.innerHTML =
        `body *{letter-spacing:` +
        (letter_spacing_count + 1) +
        `px !important;}`;
      document.head.appendChild(style);
    }
  }
}

function changeLineHeight() {
  if (line_height_count < 4 && line_height_direction == 1) {
    line_height_count++;
    document.getElementById("staccess__lineheight__btn").style.background =
      selected__;
    if (line_height_count == 4) line_height_direction = 0;
    var style = document.createElement("style");
    style.id = "ta-a11y-works-widget-line-height";
    style.innerHTML =
      `body *{ line-height:1.` + (line_height_count + 3) + ` !important}`;
    document.head.appendChild(style);
  } else {
    if (line_height_direction == 0) {
      line_height_count--;
      if (line_height_count == 0) {
        line_height_direction = 1;
        document.getElementById("staccess__lineheight__btn").style.background =
          primary__;
      }
      var style = document.createElement("style");
      style.id = "ta-a11y-works-widget-line-height";
      style.innerHTML =
        `body *{ line-height:1.` + (line_height_count + 3) + ` !important}`;
      document.head.appendChild(style);
    }
  }
}
