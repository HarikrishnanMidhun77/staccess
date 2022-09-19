// import "./consts/colors";
// from widgetfunctions.js file

// Basic Colors used
const primary__ = "#1564bf";
const hover__ = "#5e91f2";
const selected__ = "#003b8e";
//import { cdnLink } from "../consts.js";
const cdnLink =
  "https://cdn.jsdelivr.net/gh/HarikrishnanMidhun77/staccess@081cbcfa5fc6e14afac02cb96d9013b5304320a7/";

var staccess__dyslexiaFont__flag = false;
var font_size_count = 0,
  font_size_direction = 1;
var letter_spacing_count = 0,
  letter_spacing_direction = 1;
var line_height_count = 0,
  line_height_direction = 1;
var line_focus_flag = false;
var reading_ruler_flag = false;
var white_cursor_flag = false;
var bluelight_filter_flag = false;
var screen_overlay_flag = false;
var dyslexia_ruler_flag = false;
var read_text_flag = 0;

const mediaQuery = window.matchMedia("(max-width: 641px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log("Media Query Matched!");
    document.getElementById("staccess__linefocus__btn").style.display = "none";
    document.getElementById("staccess__dyslexiaruler__btn").style.display =
      "none";
    document.getElementById("staccess__readingruler__btn").style.display =
      "none";
    document.getElementById("staccess__whitecursor__btn").style.display =
      "none";
    document.getElementById("staccess__clickandread__btn").style.display =
      "none";
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

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
      "linear-gradient(0deg, var(--selected__) " +
      font_size_count * 25 +
      "%, var(--primary__) " +
      font_size_count * 25 +
      "%)";
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
      document.getElementById("staccess__fontsize__btn").style.background =
        "linear-gradient(0deg, var(--selected__)" +
        font_size_count * 25 +
        "%, var(--primary__)  " +
        font_size_count * 25 +
        "%)";
      if (font_size_count == 0) {
        font_size_direction = 1;
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
      "linear-gradient(0deg, var(--selected__)" +
      letter_spacing_count * 25 +
      "%, var(--primary__)  " +
      letter_spacing_count * 25 +
      "%)";
    if (letter_spacing_count == 4) letter_spacing_direction = 0;
    var style = document.createElement("style");
    style.id = "staccess-widget-letter-spacing";
    style.innerHTML =
      `body *{letter-spacing:` + (letter_spacing_count + 1) + `px !important;}`;
    document.head.appendChild(style);
  } else {
    if (letter_spacing_direction == 0) {
      letter_spacing_count--;
      document.getElementById("staccess__letterspacing__btn").style.background =
        "linear-gradient(0deg, var(--selected__)" +
        letter_spacing_count * 25 +
        "%, var(--primary__)  " +
        letter_spacing_count * 25 +
        "%)";
      if (letter_spacing_count == 0) {
        letter_spacing_direction = 1;
      }
      var style = document.createElement("style");
      style.id = "staccess-widget-letter-spacing";
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
      "linear-gradient(0deg, var(--selected__)" +
      line_height_count * 25 +
      "%, var(--primary__)  " +
      line_height_count * 25 +
      "%)";

    if (line_height_count == 4) line_height_direction = 0;
    var style = document.createElement("style");
    style.id = "staccess-widget-line-height";
    style.innerHTML =
      `body *{ line-height:1.` + (line_height_count + 3) + ` !important}`;
    document.head.appendChild(style);
  } else {
    if (line_height_direction == 0) {
      line_height_count--;
      document.getElementById("staccess__lineheight__btn").style.background =
        "linear-gradient(0deg, var(--selected__)" +
        line_height_count * 25 +
        "%, var(--primary__)  " +
        line_height_count * 25 +
        "%)";
      if (line_height_count == 0) {
        line_height_direction = 1;
      }
      var style = document.createElement("style");
      style.id = "staccess-widget-line-height";
      style.innerHTML =
        `body *{ line-height:1.` + (line_height_count + 3) + ` !important}`;
      document.head.appendChild(style);
    }
  }
}
function applyLineFocus() {
  if (!line_focus_flag) {
    document.getElementById("staccess__linefocus__btn").style.background =
      selected__;
    line_focus_flag = true;
    var shadow = document.querySelector("#staccess-widget-shadow-root");
    if (shadow) {
      var lineFocusDiv = shadow.shadowRoot.querySelectorAll(
        "#staccess-widget-line-focus-wrapper"
      );
      if (lineFocusDiv.length > 0) {
        lineFocusDiv.forEach((item) => item.remove());
      }
    }
    // document.querySelectorAll("#staccess-widget-shadow-root").forEach((item, key) => {
    //   item.shadowRoot.querySelector("#staccess-widget-line-focus-wrapper").remove();
    // });
    let style = document.createElement("style");
    style.innerHTML = `
    #ha-a11y-line-focus-top-div{
      position: fixed;
      width: 100%;
      // left: 0;
      top: 0;
      z-index: 9999999 !important;
      background-color: #222F3D;
      opacity: 0.5;
      height: 100%;
    }
    #ha-a11y-line-focus-bottom-div{
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      z-index: 9999999 !important;
      background-color: #222F3D;
      opacity: 0.5;
      height: 100% !important;
    }
  `;
    let shadowDiv = document.createElement("div");
    shadowDiv.id = "staccess-widget-shadow-root";
    let shadowRoot = shadowDiv.attachShadow({ mode: "open" });
    let shadowChild = document.createElement("div");
    shadowChild.classList.add("staccess-widget-shadow-content");

    let upperDiv = document.createElement("div");
    upperDiv.id = "ha-a11y-line-focus-top-div";
    let bottomDiv = document.createElement("div");
    bottomDiv.id = "ha-a11y-line-focus-bottom-div";
    let wrapperDiv = document.createElement("div");
    wrapperDiv.id = "staccess-widget-line-focus-wrapper";

    let script = document.createElement("script");
    script.textContent = `
  var upperDiv = document.querySelector("#staccess-widget-shadow-root").shadowRoot.querySelector("div#ha-a11y-line-focus-top-div");
  var bottomDiv = document.querySelector("#staccess-widget-shadow-root").shadowRoot.querySelector("div#ha-a11y-line-focus-bottom-div");
  var upperheight;
  var bottomTop;
  var height = 30;
  var cpyMouseY=0;
  // console.log("--------UPPER DIV---------")
  // console.log(upperDiv)
  // console.log(bottomDiv)
  document.body.addEventListener("mousemove", (event) => {
    var mouseY = event.clientY +
        (document && document.scrollTop  || document.body && document.body.scrollTop  || 0) -
        (document && document.clientTop  || document.body && document.body.clientTop  || 0 );
    // console.log("-------scroll test-----------")
    // console.log("mouseY: ", mouseY)
    // console.log("scroll top:", document.scrollTop);
    // console.log("body scroll top:", document.body.scrollTop);
    // console.log("event y:",event.clientY);
    // console.log("window scrollY:", window.scrollY)
    let half = ((mouseY+height)-mouseY)/2;
    upperDiv.style.height = mouseY - half +"px";
    upperHeight = mouseY-half;
    bottomTop = mouseY-half;
    bottomDiv.style.top = mouseY+height-half +"px"
    cpyMouseY = mouseY;

  });

  function addHeight(){
    height = height + 20;
    let half = ((cpyMouseY+height)-bottomTop)/2;
    upperDiv.style.height = cpyMouseY - half +"px";
    bottomDiv.style.top = cpyMouseY+height-half+"px";
    bottomTop = cpyMouseY-half;
    upperHeight=cpyMouseY-half;

  }
  function removeHeight(){
    height = height - 20;
    let half = ((cpyMouseY+height)-bottomTop)/2;
    upperDiv.style.height = cpyMouseY-half+"px";
    bottomDiv.style.top = cpyMouseY+height-half+"px";
    bottomTop = cpyMouseY-half;
    upperHeight = cpyMouseY-half;
    // bottomDiv.style.top = (cpyMouseY + height) +"px";
  }
  function changeHeightWithSlider(sliderVal){
    let val = sliderVal *20
    height = val;
    let half = ((cpyMouseY+height)-bottomTop)/2;
    upperDiv.style.height = cpyMouseY - half +"px";
    bottomDiv.style.top = cpyMouseY +height - half +"px";
    bottomTop = cpyMouseY-half;
    upperHeight = cpyMouseY-half;
  }
  function setHeight(newHeight){
    height = newHeight;
    let half = ((cpyMouseY+height)-bottomTop)/2;
    upperDiv.style.height = cpyMouseY - half +"px";
    bottomDiv.style.top = cpyMouseY +height - half +"px";
    bottomTop = cpyMouseY-half;
    upperHeight = cpyMouseY-half; 

  }`;
    wrapperDiv.appendChild(style);
    wrapperDiv.appendChild(script);
    wrapperDiv.appendChild(upperDiv);
    wrapperDiv.appendChild(bottomDiv);
    shadowChild.appendChild(wrapperDiv);
    shadowRoot.appendChild(shadowChild);
    if (document.querySelector("#staccess-widget-shadow-root")) {
      document
        .querySelector("#staccess-widget-shadow-root")
        .shadowRoot.appendChild(wrapperDiv);
    } else {
      document.body.appendChild(shadowDiv);
    }
  } else {
    document.getElementById("staccess__linefocus__btn").style.background =
      primary__;
    line_focus_flag = false;
    var shadow = document.querySelector("#staccess-widget-shadow-root");
    if (shadow) {
      var lineFocus = shadow.shadowRoot.querySelectorAll(
        "#staccess-widget-line-focus-wrapper"
      );
      if (lineFocus.length > 0) {
        lineFocus.forEach((item, key) => {
          item.remove();
        });
      }
    }
  }
}
function applyReadingRuler() {
  if (!reading_ruler_flag) {
    document.getElementById("staccess__readingruler__btn").style.background =
      selected__;
    reading_ruler_flag = true;
    let style = document.createElement("style");
    style.innerHTML = `#ta-a11y-works-widget-reading-ruler-div {
        position: fixed;
        width: 100%;
        height: 10px;
        z-index: 999999;
        background:black;
        outline: 3px solid #cece05;
        pointer-events: none;
      }`;

    let shadowDiv = document.createElement("div");
    shadowDiv.id = "ta-a11y-works-widget-shadow-root";
    let shadowRoot = shadowDiv.attachShadow({ mode: "open" });
    let shadowChild = document.createElement("div");
    shadowChild.classList.add("ta-a11y-works-widget-shadow-content");
    let script = document.createElement("script");
    script.textContent = `
    var readingRuler = document.querySelector("#ta-a11y-works-widget-shadow-root").shadowRoot.querySelector("#ta-a11y-works-widget-reading-ruler-div");
    document.body.addEventListener("mousemove", (event) => {
        let mouseY = event.clientY +
        (document && document.scrollTop  || document.body && document.body.scrollTop  || 0) -
        (document && document.clientTop  || document.body && document.body.clientTop  || 0 );
        let currentScale = parseFloat(window.getComputedStyle(document.body).zoom);
        mouseY = mouseY/Number(currentScale)+15;
        readingRuler.style.top = mouseY+"px";
    })
    `;

    let readingRuler = document.createElement("div");
    readingRuler.id = "ta-a11y-works-widget-reading-ruler-div";

    let wrapperDiv = document.createElement("div");
    wrapperDiv.id = "ta-a11y-works-widget-reading-ruler-wrapper";
    wrapperDiv.appendChild(script);
    wrapperDiv.appendChild(style);
    wrapperDiv.appendChild(readingRuler);
    shadowChild.appendChild(wrapperDiv);
    shadowRoot.appendChild(shadowChild);

    if (document.querySelector("#ta-a11y-works-widget-shadow-root")) {
      document
        .querySelector("#ta-a11y-works-widget-shadow-root")
        .shadowRoot.appendChild(wrapperDiv);
    } else {
      document.body.appendChild(shadowDiv);
    }
  } else {
    document.getElementById("staccess__readingruler__btn").style.background =
      primary__;
    reading_ruler_flag = false;
    var shadow = document.querySelector("#ta-a11y-works-widget-shadow-root");
    if (shadow) {
      var readingRulerDiv = shadow.shadowRoot.querySelectorAll(
        "#ta-a11y-works-widget-reading-ruler-wrapper"
      );
      readingRulerDiv.forEach((item) => item.remove());
    }
  }
}
function applyWhiteCursor() {
  if (!white_cursor_flag) {
    document.getElementById("staccess__whitecursor__btn").style.background =
      selected__;
    white_cursor_flag = true;
    var style = document.createElement("style");
    style.id = "ta-a11y-works-widget-white-mouse";
    // var cursor = chrome.extension.getURL("icons/whiteCursor32.png");
    // var hover = chrome.extension.getURL("icons/whiteHover32.png");

    var cursor = cdnLink + "src/icons/whiteCursor32.png";
    var hover = cdnLink + "src/icons/whiteHover32.png";
    style.innerHTML = `body *{cursor: url(${cursor}), auto !important;} a:hover, button:hover {cursor: url(${hover}), auto !important;}`;
    document.head.appendChild(style);
  } else {
    document.getElementById("staccess__whitecursor__btn").style.background =
      primary__;
    white_cursor_flag = false;
    let styleTag = document.head.querySelector(
      "#ta-a11y-works-widget-white-mouse"
    );
    if (styleTag) styleTag.remove();
  }
}
function applyBluelightFilter() {
  if (!bluelight_filter_flag) {
    document.getElementById("staccess__bluelightfilter__btn").style.background =
      selected__;
    bluelight_filter_flag = true;

    // let styleTag = document.querySelector("#ta_bluelight");

    let style = document.createElement("style");
    style.innerHTML = `
    #ta_bluelight {
      opacity: 0.2 !important;
      background-color: #ffffbf !important;
      width: 100% !important;
      height: 100% !important;
      z-index: 9999 !important;
      top: 0 !important;
      left: 0 !important;
      position: fixed !important;
      pointer-events: none !important;
    }
    `;
    style.id = "ta-a11y-works-widget-blue-light";
    document.head.appendChild(style);

    var d = document.createElement("div");
    d.id = "ta_bluelight";
    document.body.insertBefore(d, document.body.childNodes[0]);
    // var d = document.createElement("div");
    // d.id = "ta_bluelight";
    // document.body.insertBefore(d, document.body.childNodes[0]);
  } else {
    document.getElementById("staccess__bluelightfilter__btn").style.background =
      primary__;
    bluelight_filter_flag = false;
    let styleTag = document.querySelector("#ta_bluelight");
    if (styleTag) styleTag.remove();
  }
}
function applyScreenOverlay() {
  if (!screen_overlay_flag) {
    document.getElementById("staccess__screenoverlay__btn").style.background =
      selected__;
    screen_overlay_flag = true;

    // document
    //   .querySelectorAll("#ta-a11y-works-widget-shadow-root")
    //   .forEach((item, key) => {
    //     item.shadowRoot
    //       .querySelector("#ta-a11y-widget-screen-overlay-wrapper")
    //       .remove();
    //   });
    var checkExist = setInterval(function () {
      if (document.body) {
        // console.log("body tag loaded");
        var style = document.createElement("style");
        style.id = "ta-a11y-widget-screen-overlay";
        style.innerHTML = `.ta-a11y-widget-screen-overlay {  
              position: fixed;
              width: 100%;
              background-color: rgb(10 10 10 / 50%);
              z-index: 999999;
              top:0px;
              left:0;
              height:100%;
              opacity:0.5;
              pointer-events:none;
              z-index:999990
          }`;
        document.head.appendChild(style);

        let shadowDiv = document.createElement("div");
        shadowDiv.id = "ta-a11y-works-widget-shadow-root";
        let shadowRoot = shadowDiv.attachShadow({ mode: "open" });
        let shadowChild = document.createElement("div");
        shadowChild.classList.add("ta-a11y-works-widget-shadow-content");

        let overlayDiv = document.createElement("div");
        overlayDiv.classList.add("ta-a11y-widget-screen-overlay");
        // overlayDiv.style.height='100%';
        let wrapperDiv = document.createElement("div");
        wrapperDiv.id = "ta-a11y-widget-screen-overlay-wrapper";
        wrapperDiv.appendChild(style);
        wrapperDiv.appendChild(overlayDiv);
        shadowChild.appendChild(wrapperDiv);
        shadowRoot.appendChild(shadowChild);
        if (document.querySelector("#ta-a11y-works-widget-shadow-root")) {
          document
            .querySelector("#ta-a11y-works-widget-shadow-root")
            .shadowRoot.appendChild(wrapperDiv);
        } else {
          document.body.appendChild(shadowDiv);
        }

        clearInterval(checkExist);
      }
    }, 10);
  } else {
    document.getElementById("staccess__screenoverlay__btn").style.background =
      primary__;
    screen_overlay_flag = false;

    var overlays = document.body
      .querySelector("#ta-a11y-works-widget-shadow-root")
      .shadowRoot.querySelectorAll("#ta-a11y-widget-screen-overlay-wrapper");
    if (overlays.length > 0) {
      overlays.forEach((item, key) => {
        item.remove();
      });
    }
  }
}
function applyDyslexiaRuler() {
  if (!dyslexia_ruler_flag) {
    document.getElementById("staccess__dyslexiaruler__btn").style.background =
      selected__;
    dyslexia_ruler_flag = true;

    var shadow = document.querySelector("#ta-a11y-works-widget-shadow-root");
    if (shadow) {
      let dyslexiaRuler = shadow.shadowRoot.querySelectorAll(
        "#ta-a11y-works-widget-dyslexia-ruler-wrapper"
      );
      dyslexiaRuler.forEach((item) => item.remove());
    }
    // document.querySelectorAll("#ta-a11y-works-widget-shadow-root").forEach((item, key) => {
    //   item.shadowRoot.querySelector("#ta-a11y-works-widget-dyslexia-ruler-wrapper").remove();
    // });

    let style = document.createElement("style");
    style.innerHTML = `#ta-a11y-works-widget-dyslexia-ruler-div {
        position: fixed;
        width: 98%;
        height: 200px;
        z-index: 999999;
        pointer-events: none;
        margin:0px auto;
        right:1%
      }
      // #ta-a11y-widget-dyslexia-ruler-top{
      //   height:40px;
      //   z-index:999999 !important;
      //   pointer-events:none;
      //   background-color:rgb(233 0 197);
      //   border-top-left-radius: 5px;
      //   border-top-right-radius: 5px;
      //   opacity:50%
      // }
      #ta-a11y-widget-dyslexia-ruler-middle{
        height:100px;
        z-index:999999 !important;
        pointer-events:none;
        background-color:#000084;

      }
      #ta-a11y-widget-dyslexia-ruler-bottom{
        height:50px;
        z-index:999999 !important;
        pointer-events:none;
        background-color:rgb(233 0 197);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        opacity:50%
      }
      
      `;

    let shadowDiv = document.createElement("div");
    shadowDiv.id = "ta-a11y-works-widget-shadow-root";
    let shadowRoot = shadowDiv.attachShadow({ mode: "open" });
    let shadowChild = document.createElement("div");
    shadowChild.classList.add("ta-a11y-works-widget-shadow-content");
    let script = document.createElement("script");
    script.textContent = `
    var dyslexiaRuler = document.querySelector("#ta-a11y-works-widget-shadow-root").shadowRoot.querySelector("#ta-a11y-works-widget-dyslexia-ruler-div");
    document.body.addEventListener("mousemove", mouseMoveListener);

    function mouseMoveListener(event){
      let rulerDiv = document.querySelector("#ta-a11y-works-widget-shadow-root").shadowRoot.querySelector("#ta-a11y-works-widget-dyslexia-ruler-div");
      if(rulerDiv){
        let mouseY = event.clientY +
        (document && document.scrollTop  || document.body && document.body.scrollTop  || 0) -
        (document && document.clientTop  || document.body && document.body.clientTop  || 0 );
        let currentScale = parseFloat(window.getComputedStyle(document.body).zoom);
        mouseY = mouseY/Number(currentScale);
        var center = (document.querySelector("#ta-a11y-works-widget-shadow-root").shadowRoot.querySelector("#ta-a11y-widget-dyslexia-ruler-bottom").offsetHeight)/2;
        mouseY -=100+center;
        dyslexiaRuler.style.top = mouseY+"px";
      }
    }
    // document.body.addEventListener("mousemove", (event) => {
    //     let mouseY = event.clientY +
    //     (document && document.scrollTop  || document.body && document.body.scrollTop  || 0) -
    //     (document && document.clientTop  || document.body && document.body.clientTop  || 0 );
    //     let currentScale = parseFloat(window.getComputedStyle(document.body).zoom);
    //     mouseY = mouseY/Number(currentScale);
    //     mouseY -=(document.querySelector("#ta-a11y-works-widget-shadow-root").shadowRoot.querySelector("#ta-a11y-widget-dyslexia-ruler-top").offsetHeight)/2;
    //     dyslexiaRuler.style.top = mouseY+"px";
    // })
    `;

    let dyslexiaRuler = document.createElement("div");
    dyslexiaRuler.id = "ta-a11y-works-widget-dyslexia-ruler-div";

    // let topDiv = document.createElement("div");
    // topDiv.id = "ta-a11y-widget-dyslexia-ruler-top";
    let middleDiv = document.createElement("div");
    middleDiv.id = "ta-a11y-widget-dyslexia-ruler-middle";
    let bottomDiv = document.createElement("div");
    bottomDiv.id = "ta-a11y-widget-dyslexia-ruler-bottom";

    // dyslexiaRuler.appendChild(topDiv);
    dyslexiaRuler.appendChild(middleDiv);
    dyslexiaRuler.appendChild(bottomDiv);

    let wrapperDiv = document.createElement("div");
    wrapperDiv.id = "ta-a11y-works-widget-dyslexia-ruler-wrapper";
    wrapperDiv.appendChild(script);
    wrapperDiv.appendChild(style);
    wrapperDiv.appendChild(dyslexiaRuler);
    shadowChild.appendChild(wrapperDiv);
    shadowRoot.appendChild(shadowChild);

    if (document.querySelector("#ta-a11y-works-widget-shadow-root")) {
      document
        .querySelector("#ta-a11y-works-widget-shadow-root")
        .shadowRoot.appendChild(wrapperDiv);
    } else {
      document.body.appendChild(shadowDiv);
    }
  } else {
    document.getElementById("staccess__dyslexiaruler__btn").style.background =
      primary__;
    dyslexia_ruler_flag = false;

    document.body.removeEventListener("mousemove", mouseMoveListener);
    function mouseMoveListener(event) {
      let mouseY =
        event.clientY +
        ((document && document.scrollTop) ||
          (document.body && document.body.scrollTop) ||
          0) -
        ((document && document.clientTop) ||
          (document.body && document.body.clientTop) ||
          0);
      let currentScale = parseFloat(
        window.getComputedStyle(document.body).zoom
      );
      mouseY = mouseY / Number(currentScale);
      mouseY -=
        document
          .querySelector("#ta-a11y-works-widget-shadow-root")
          .shadowRoot.querySelector("#ta-a11y-widget-dyslexia-ruler-top")
          .offsetHeight / 2;
      dyslexiaRuler.style.top = mouseY + "px";
    }

    var shadow = document.body.querySelector(
      "#ta-a11y-works-widget-shadow-root"
    );
    if (shadow) {
      let dyslexiaRulerDiv = shadow.shadowRoot.querySelectorAll(
        "#ta-a11y-works-widget-dyslexia-ruler-wrapper"
      );
      dyslexiaRulerDiv.forEach((item) => item.remove());
    }
  }
}
function applyReadText() {
  if (read_text_flag == 0) {
    document.getElementById("staccess__readtext__btn").style.background =
      selected__;
    document.getElementById("staccess__readtext_stop__btn").style.display =
      "inline";
    read_text_flag = 1;
    document.getElementById("staccess__readtext__img").src =
      cdnLink + "src/icons/pause.svg";
    // "../icons/pause.svg";
    console.log("state", "start");
    let style = document.createElement("style");
    style.innerHTML = `
  .ta-a11y-widget-text-reader-hlight{background-color:#ffcc00;}
  `;

    let shadowDiv = document.createElement("div");
    shadowDiv.id = "ta-a11y-works-widget-shadow-root";
    let shadowRoot = shadowDiv.attachShadow({ mode: "open" });
    let shadowChild = document.createElement("div");
    shadowChild.classList.add("ta-a11y-works-widget-shadow-content");
    let script = document.createElement("script");

    script.textContent = `

    
  var utterance = new SpeechSynthesisUtterance();
var wordIndex = 0;
var global_words = [];
utterance.lang = 'en-UK';
utterance.rate = 1;

var ix90=0;
var text="";
var compText="";
var compWords=[]
var compTextArr=[]
var comp   = document.querySelectorAll("p,h1, h2, h3, h4, h5, h6,li,blockquote,dd,dl,dt,figcaption,figure,hr,menu,ol,ul,pre");
console.log("comp",comp)

for(ix90=0;ix90<comp.length;ix90++){
  
  console.log("ix90",comp[ix90].innerHTML)
  try{
    if( !comp[ix90].classList.contains("staccess")){
      text+= comp[ix90].innerHTML;

      compText=comp[ix90].innerHTML;
      compTextArr=compText.trim().split(" ");
      compTextArr=compTextArr.filter(item => item.length !== 0) 
      compWords[ix90]=compTextArr;
      compText='';
      compTextArr=[]
      // drawTextInPanel(comp[ix90],compText.trim().split(" "));
      }
  }
 catch(e){

 }
}
console.log("text",text)
var words   = text.trim().split(" ");
console.log("words",words)
 words=words.filter(item => item.length !== 0) 
 console.log("words2",words)
global_words = words;
// Draw the text in a div
drawTextInPanel(comp,compWords);

spokenTextArray = words;
utterance.text = text;
speechSynthesis.speak(utterance);

utterance.onboundary = function(event){
  //var e = document.querySelector("p").innerHTML;
  var word = getWordAt(comp.innerHTML,event.charIndex);
  // Show Speaking word : x
 // document.getElementById("word").innerHTML = word;
  //Increase index of span to highlight
  console.info(global_words[wordIndex]);
  console.log("wordIndex",wordIndex)
  try{
    document.getElementById("word_span_"+wordIndex).style.background = "#ffcc00";
    document.getElementById("word_span_"+(wordIndex-1)).style.background = "";
   
  }catch(e){}
  
  wordIndex++;
  document.getElementById("word_span_"+(words.length-1)).style.background = "";
};

utterance.onend = function(event){
location.reload()
  }


function getWordAt(str, pos) {
  // Perform type conversions.
  str = String(str);
  pos = Number(pos) >>> 0;

  // Search for the word's beginning and end.
  var left = str.slice(0, pos + 1).search(/\S+$/),
      right = str.slice(pos).search(/\s/);

  // The last word in the string is a special case.
  if (right < 0) {
      return str.slice(left);
  }
  // Return the word, using the located bounds to extract it from the string.
  return str.slice(left, right + pos);
}

function drawTextInPanel(comp,words_array){
var c=-1;
  for(var jx90=0;jx90<comp.length;jx90++){
    if( !comp[jx90].classList.contains("staccess")){
      console.log("words array "+[jx90],words_array[jx90]);
      // var panel = document.getElementById("panel");
      comp[jx90].innerHTML ='';
       for(var i = 0;i < words_array[jx90].length;i++){
         var html = '<span class="sta__span__" id="word_span_'+c+'">'+words_array[jx90][i]+'</span>&nbsp;';
         comp[jx90].innerHTML += html;
         console.log("comp["+jx90+"].innerHTML",comp[jx90].innerHTML)
         c++;
       }
  }
}

}

function clearSpace(arr){
  for (var key in arr) {
      if (arr[key] == "") {
          arr.splice(key, 1)
          clearSpace(arr)
      }
  }
}
  `;

    let readText = document.createElement("div");
    readText.id = "ta-a11y-works-widget-read-text-div";

    // let topDiv = document.createElement("div");
    // topDiv.id = "ta-a11y-widget-read-text-top";
    let middleDiv = document.createElement("div");
    middleDiv.id = "ta-a11y-widget-read-text-middle";
    let bottomDiv = document.createElement("div");
    bottomDiv.id = "ta-a11y-widget-read-text-bottom";

    // readText.appendChild(topDiv);
    readText.appendChild(middleDiv);
    readText.appendChild(bottomDiv);

    let wrapperDiv = document.createElement("div");
    wrapperDiv.id = "ta-a11y-works-widget-read-text-wrapper";
    wrapperDiv.appendChild(style);
    wrapperDiv.appendChild(script);

    wrapperDiv.appendChild(readText);
    shadowChild.appendChild(wrapperDiv);
    shadowRoot.appendChild(shadowChild);

    if (document.querySelector("#ta-a11y-works-widget-shadow-root")) {
      document
        .querySelector("#ta-a11y-works-widget-shadow-root")
        .shadowRoot.appendChild(wrapperDiv);
    } else {
      document.body.appendChild(shadowDiv);
    }
  } else if (read_text_flag == 1) {
    document.getElementById("staccess__readtext__btn").style.background =
      primary__;
    document.getElementById("staccess__readtext__img").src =
      cdnLink + "src/icons/play.svg";
    read_text_flag = 2;
    if (speechSynthesis) {
      speechSynthesis.pause();
    }
    console.log("state", "pause");
  } else if (read_text_flag == 2) {
    if (speechSynthesis) {
      speechSynthesis.resume();
    }
    console.log("state", "resume");
    read_text_flag = 1;
  }
}

function applyReadTextStop() {
  if (speechSynthesis) {
    speechSynthesis.cancel();
  }
  read_text_flag = 0;
  document.getElementById("staccess__readtext_stop__btn").style.visibility =
    "hidden";
  document.getElementById("staccess__readtext__img").src =
    cdnLink + "src/icons/audio.svg";
  const spans = document.querySelectorAll(".sta__span__");

  spans.forEach((span1) => {
    span1.remove();
  });
  location.reload();
}
function applyClickAndRead() {
  openSidebar();
  let shadowDiv = document.createElement("div");
  shadowDiv.id = "ta-a11y-works-widget-shadow-root";
  let shadowRoot = shadowDiv.attachShadow({ mode: "open" });
  let shadowChild = document.createElement("div");
  shadowChild.classList.add("ta-a11y-works-widget-shadow-content");
  let script = document.createElement("script");

  script.textContent = `
  var utterance = new SpeechSynthesisUtterance();
  var wordIndex = 0;
  var global_words = [];
  utterance.lang = 'en-UK';
  utterance.rate = 1;
  var click_count=0;
  var current_comp=[];
  var endCount=0;



function clickReader(e){
  click_count++;
  var wordIndex = 0;
  e = e || window.event;
  var target = e.target || e.srcElement,
      text = target.textContent || target.innerText;   
  current_comp.push(target);
  current_comp.sort(function(a, b){

    return b.innerText.length - a.innerText.length;
  });
 endCount=current_comp.length-1;

      target.style.background = "#ffcc00";
     

      // var words   = text.trim().split(" ");
      // words=words.filter(item => item.length !== 0) 
      // if(click_count<=1){
      //   drawTextInPanel(target,words)
      // }
      
      utterance.text = text;
      speechSynthesis.speak(utterance);
}

    var comp   = document.querySelectorAll("p,h1, h2, h3, h4, h5, h6,li,blockquote,dd,dl,dt,figcaption,figure,hr,menu,ol,ul,pre");
    for(var i = 0;i < comp.length;i++){
      if( !comp[i].classList.contains("sta__span__")){
      comp[i].addEventListener('click', clickReader,false);
      comp[i].style.cursor = "pointer";
      }
     
    }

    function drawTextInPanel(comp,words_array){
        var c=0;
          comp.innerHTML ='';
          for(var i = 0;i < words_array.length;i++){
              var html = '<span class="sta__span__" id="word_span_'+c+'">'+words_array[i]+'</span>&nbsp;';
              comp.innerHTML += html;
              c++;
          }
          wordIndex=0;
      }
      utterance.onend = function(event){
        console.log(current_comp,endCount)
       
          current_comp[endCount].style.background = "";
          endCount--;
          // if(endCount==0){
          //   current_comp[0].style.background = "";
          // }
        
      }

      // utterance.onboundary = function(event){
      //   console.log(event.charIndex)
      //   var text = current_comp.textContent || current_comp.innerText; 
      //   var newLetter='I';
      //   var position=event.charIndex
      //   var newText=[text.slice(0, position), newLetter, text.slice(position)].join('');  
      //   current_comp.innerText=newText

      // }

      // utterance.onboundary = function(event){
      //   var word = getWordAt(comp.innerHTML,event.charIndex);
      //   try{
      //     document.getElementById("word_span_"+wordIndex).style.background = "#ffcc00";
      //     document.getElementById("word_span_"+(wordIndex-1)).style.background = "";
      //   }catch(e){}
      //   wordIndex++;
      //   document.getElementById("word_span_"+(words.length-1)).style.background = "";
      // };

      function getWordAt(str, pos) {
        str = String(str);
        pos = Number(pos) >>> 0;
      
        var left = str.slice(0, pos + 1).search(/\S+$/),
            right = str.slice(pos).search(/\s/);
      
        if (right < 0) {
            return str.slice(left);
        }
        return str.slice(left, right + pos);
      }
    `;
  let readText = document.createElement("div");
  readText.id = "ta-a11y-works-widget-read-text-div";

  // let topDiv = document.createElement("div");
  // topDiv.id = "ta-a11y-widget-read-text-top";
  let middleDiv = document.createElement("div");
  middleDiv.id = "ta-a11y-widget-read-text-middle";
  let bottomDiv = document.createElement("div");
  bottomDiv.id = "ta-a11y-widget-read-text-bottom";

  // readText.appendChild(topDiv);
  readText.appendChild(middleDiv);
  readText.appendChild(bottomDiv);

  let wrapperDiv = document.createElement("div");
  wrapperDiv.id = "ta-a11y-works-widget-read-text-wrapper";

  wrapperDiv.appendChild(script);

  wrapperDiv.appendChild(readText);
  shadowChild.appendChild(wrapperDiv);
  shadowRoot.appendChild(shadowChild);

  if (document.querySelector("#ta-a11y-works-widget-shadow-root")) {
    document
      .querySelector("#ta-a11y-works-widget-shadow-root")
      .shadowRoot.appendChild(wrapperDiv);
  } else {
    document.body.appendChild(shadowDiv);
  }
}
function openSidebar() {
  console.log("button clicked");
  if (
    document.getElementsByClassName("sidebar")[0].style.visibility == "visible"
  ) {
    document.getElementsByClassName("sidebar")[0].style.visibility = "hidden";
    document.getElementById("staccess__readtext_stop__btn").style.visibility =
      "hidden";
  } else {
    document.getElementsByClassName("sidebar")[0].style.visibility = "visible";
  }
}

// let speech = new SpeechSynthesisUtterance();
// speech.lang = "en";

// var inputs = document.querySelectorAll('p');

// inputs.forEach(function(input) {
//   input.addEventListener('mouseover', function hover() {
//     input.classList.add('ta-a11y-widget-text-reader-hlight')
//   });

//   input.addEventListener('mouseleave', function leave() {
//     input.classList.remove('ta-a11y-widget-text-reader-hlight')

//   });
// });

// speech.text = document.querySelector("p").textContent;
// window.speechSynthesis.speak(speech);

// var utterance = new SpeechSynthesisUtterance();
//   utterance.lang = 'en-UK';
//   utterance.rate = 1;
//   var text = document.querySelector("textarea").value;

//   utterance = new SpeechSynthesisUtterance();
//   utterance.onboundary = onboundaryHandler;
//   utterance.text = text;
//   speechSynthesis.speak(utterance);

//   function onboundaryHandler(event){
//     var textarea =document.querySelector("textarea");
//     var value = textarea.value;
//     var index = event.charIndex;
//     // console.log("value",value);
//     console.log("index",index);
//     var word = getWordAt(value, index);
//     console.log("word",word);
//     var anchorPosition = getWordStart(value, index);
//     var activePosition = anchorPosition + word.length;
// console.log("anchorPosition",anchorPosition)
// console.log("activePosition",activePosition)

//     textarea.focus();
//     textarea.setSelectionRange(anchorPosition, activePosition);
//     if (textarea.setSelectionRange) {
//        textarea.setSelectionRange(anchorPosition, activePosition);
//     }
//     else {
//        var range = textarea.createTextRange();
//        range.collapse(true);
//        range.moveEnd('character', activePosition);
//        range.moveStart('character', anchorPosition);
//        range.select();
//     }
// };

// function getWordAt(str, pos) {
//   str = String(str);
//   pos = Number(pos) >>> 0;

//   var left = str.slice(0, pos + 1).search(/\S+$/),
//       right = str.slice(pos).search(/\s/);

//   if (right < 0) {
//       return str.slice(left);
//   }
//   return str.slice(left, right + pos);
// }

// function getWordStart(str, pos) {
//   str = String(str);
//   pos = Number(pos) >>> 0;

//   var start = str.slice(0, pos + 1).search(/\S+$/);
//   return start;
// }
