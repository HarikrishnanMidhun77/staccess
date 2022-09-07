// import "./consts/colors";
// from widgetfunctions.js file

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
var line_focus_flag = false;
var reading_ruler_flag = false;
var white_cursor_flag = false;
var bluelight_filter_flag = false;
var screen_overlay_flag = false;
var dyslexia_ruler_flag = false;

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
