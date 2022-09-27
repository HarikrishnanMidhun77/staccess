// import "./consts/colors";
// from widgetfunctions.js file

// Basic Colors used
const primary__ = "#1564bf";
const hover__ = "#5e91f2";
const selected__ = "#003b8e";
//import { cdnLink } from "../consts.js";
const cdnLink =
  "https://cdn.jsdelivr.net/gh/HarikrishnanMidhun77/staccess@3244158007a95269210beea3d688cf84eeea14c7/";

var dyslexiaFont__flag = false;
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
var read_click_text_flag = false;
var monochrome_flag = false;
var link_highlight_flag = false;
var heading_highlight_flag = false;
var disable_animations_flag = false;

document.addEventListener("DOMContentLoaded", function () {
  st__loadStyles__();
});

function st__loadStyles__() {
  let style = document.createElement("style");
  style.innerHTML = `
    body.ta-a11y-works-widget-link-highlight a {
     
      text-decoration: underline !important;
      border: 2px red !important;
      border-style: dotted double !important;
    }
    body.ta-a11y-works-widget-link-highlight a > :first-child {
      text-decoration: underline !important;
      border: 3px red !important;
      border-style: dotted double !important;
    }
    `;
  style.id = "ta-a11y-works-widget-linkhighlight";
  document.head.appendChild(style);

  var style3 = document.createElement("style");
  style3.innerHTML = `
  
  body.ta-a11y-works-widget-heading-highlight h1,
body.ta-a11y-works-widget-heading-highlight h2,
body.ta-a11y-works-widget-heading-highlight h3,
body.ta-a11y-works-widget-heading-highlight h4,
body.ta-a11y-works-widget-heading-highlight h5,
body.ta-a11y-works-widget-heading-highlight h6 {
  text-decoration: underline !important;
  color: #000 !important;
  background-color: orange !important;
  outline-color: #ffd816 !important;
  outline-style: dashed !important;
  outline-width: 2px !important;
}
body.ta-a11y-works-widget-heading-highlight h1 font,
body.ta-a11y-works-widget-heading-highlight h2 font,
body.ta-a11y-works-widget-heading-highlight h3 font,
body.ta-a11y-works-widget-heading-highlight h4 font,
body.ta-a11y-works-widget-heading-highlight h5 font,
body.ta-a11y-works-widget-heading-highlight h6 font {
  color: black;
}
  `;
  style3.id = "ta-a11y-works-widget-heading-highlight";
  document.head.appendChild(style3);

  var style4 = document.createElement("style");
  style4.innerHTML = `
  
  body.ta-a11y-works-disable-animations *{

    transition-property: none !important;
    animation: none !important;
    animation-name: none !important;
  }
  
  `;
  style4.id = "ta-a11y-works-widget-disable-animations";
  document.head.appendChild(style4);
}

function resetClickAndRead() {
  if (speechSynthesis) {
    speechSynthesis.cancel();
  }
  document.body
    .querySelectorAll("*.ta-a11y-widget-text-reader-hlight")
    .forEach((item, key) => {
      item.classList.remove("ta-a11y-widget-text-reader-hlight");
    });
  var shadow = document.querySelector("#ta-a11y-works-widget-shadow-root");
  console.log("shadow", shadow);
  if (shadow) {
    var readTextDiv = shadow.shadowRoot.querySelectorAll(
      "#ta-a11y-works-widget-read-text-wrapper"
    );
    // var readTextDiv = document.querySelectorAll(
    //   "*#ta-a11y-works-widget-read-text-wrapper"
    // );
    console.log("readTextDiv", readTextDiv);
    readTextDiv.forEach((item) => item.remove());
    read_click_text_flag = false;
  }
  var comp = document.querySelectorAll(
    "p,h1, h2, h3, h4, h5, h6,li,blockquote,dd,dl,dt,figcaption,figure,hr,menu,ol,ul,pre"
  );
  for (var i = 0; i < comp.length; i++) {
    if (!comp[i].classList.contains("sta__span__")) {
      comp[i].removeEventListener("click", clickReader, false);
      comp[i].style.cursor = "default";
    }
  }
  document.getElementById("staccess__clickandread__img").src =
    cdnLink + "src/icons/audio.svg";
}
function resetAll() {
  document.body.querySelectorAll("button.tile__").forEach((item, key) => {
    item.style.background = primary__;
  });
  // click and read
  if (read_click_text_flag) {
    resetClickAndRead();
    // if (speechSynthesis) {
    //   speechSynthesis.cancel();
    // }
    // document.body
    //   .querySelectorAll("*.ta-a11y-widget-text-reader-hlight")
    //   .forEach((item, key) => {
    //     item.classList.remove("ta-a11y-widget-text-reader-hlight");
    //   });
    // var shadow = document.querySelector("#ta-a11y-works-widget-shadow-root");
    // console.log("shadow", shadow);
    // if (shadow) {
    //   var readTextDiv = shadow.shadowRoot.querySelectorAll(
    //     "#ta-a11y-works-widget-read-text-wrapper"
    //   );
    //   // var readTextDiv = document.querySelectorAll(
    //   //   "*#ta-a11y-works-widget-read-text-wrapper"
    //   // );
    //   console.log("readTextDiv", readTextDiv);
    //   readTextDiv.forEach((item) => item.remove());
    // }
    // var comp = document.querySelectorAll(
    //   "p,h1, h2, h3, h4, h5, h6,li,blockquote,dd,dl,dt,figcaption,figure,hr,menu,ol,ul,pre"
    // );
    // for (var i = 0; i < comp.length; i++) {
    //   if (!comp[i].classList.contains("sta__span__")) {
    //     comp[i].removeEventListener("click", clickReader, false);
    //     comp[i].style.cursor = "default";
    //   }
    // }
    // document.getElementById("staccess__clickandread__img").src =
    //   cdnLink + "src/icons/audio.svg";
  }

  //Dyslexic Font
  if (dyslexiaFont__flag) {
    document.head
      .querySelectorAll("style#staccess-widget-font")
      .forEach((item, key) => item.remove());
    document.head
      .querySelectorAll("style#staccess-widget-font2")
      .forEach((item, key) => item.remove());
  }

  // Line Focus
  if (line_focus_flag) {
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

  // Reading Ruler
  if (reading_ruler_flag) {
    var shadow = document.querySelector("#ta-a11y-works-widget-shadow-root");
    if (shadow) {
      var readingRulerDiv = shadow.shadowRoot.querySelectorAll(
        "#ta-a11y-works-widget-reading-ruler-wrapper"
      );
      readingRulerDiv.forEach((item) => item.remove());
    }
  }

  // White Mouse
  if (white_cursor_flag) {
    let styleTag = document.head.querySelector(
      "#ta-a11y-works-widget-white-mouse"
    );
    if (styleTag) styleTag.remove();
  }

  // Bluelight filter
  if (bluelight_filter_flag) {
    styleTag = document.querySelector("#ta_bluelight");
    if (styleTag) styleTag.remove();
  }

  // Scree overlay
  if (screen_overlay_flag) {
    var overlays = document.body
      .querySelector("#ta-a11y-works-widget-shadow-root")
      .shadowRoot.querySelectorAll("#ta-a11y-widget-screen-overlay-wrapper");
    if (overlays.length > 0) {
      overlays.forEach((item, key) => {
        item.remove();
      });
    }
  }

  // dylexia ruler
  if (dyslexia_ruler_flag) {
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

  if (monochrome_flag)
    document.body.classList.remove("ta-a11y-works-widget-grayscale1");
  if (link_highlight_flag)
    document.body.classList.remove("ta-a11y-works-widget-link-highlight");
  if (heading_highlight_flag)
    document.body.classList.remove("ta-a11y-works-widget-heading-highlight");
  if (disable_animations_flag)
    document.body.classList.remove("ta-a11y-works-disable-animations");
}

function applyDyslexicFont() {
  if (!dyslexiaFont__flag) {
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

    dyslexiaFont__flag = true;
  } else {
    document.head
      .querySelectorAll("style#staccess-widget-font")
      .forEach((item, key) => item.remove());
    document.head
      .querySelectorAll("style#staccess-widget-font2")
      .forEach((item, key) => item.remove());

    document.cookie = "staccess__dyslexiaFont=false;  path=/";
    // staccess__dyslexiaFont__flag = false;
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
    dyslexiaFont__flag = false;
  }
}

function changeFontSize() {
  if (font_size_count < 4 && font_size_direction == 1) {
    font_size_count++;
    tile_fill(
      font_size_count,
      font_size_direction,
      document.getElementById("staccess__fontsize__btn"),
      document.getElementById("staccess__fontsize__perc"),
      document.getElementById("staccess__fontsize__icon")
    );
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
      tile_fill(
        font_size_count,
        font_size_direction,
        document.getElementById("staccess__fontsize__btn"),
        document.getElementById("staccess__fontsize__perc"),
        document.getElementById("staccess__fontsize__icon")
      );
      if (font_size_count == 0) font_size_direction = 1;
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
    tile_fill(
      letter_spacing_count,
      letter_spacing_direction,
      document.getElementById("staccess__letterspacing__btn"),
      document.getElementById("staccess__letterspacing__perc"),
      document.getElementById("staccess__letterspacing__icon")
    );
    var style = document.createElement("style");
    style.id = "staccess-widget-letter-spacing";
    style.innerHTML =
      `body *{letter-spacing:` + (letter_spacing_count + 1) + `px !important;}`;
    document.head.appendChild(style);

    if (letter_spacing_count == 4) letter_spacing_direction = 0;
  } else {
    letter_spacing_count--;
    tile_fill(
      letter_spacing_count,
      letter_spacing_direction,
      document.getElementById("staccess__letterspacing__btn"),
      document.getElementById("staccess__letterspacing__perc"),
      document.getElementById("staccess__letterspacing__icon")
    );
    var style = document.createElement("style");
    style.id = "staccess-widget-letter-spacing";
    style.innerHTML =
      `body *{letter-spacing:` + (letter_spacing_count + 1) + `px !important;}`;
    document.head.appendChild(style);

    if (letter_spacing_count == 0) letter_spacing_direction = 1;
  }
}

function tile_fill(cnt, dir, btn, perc, icon) {
  if (cnt <= 4 && dir == 1) {
    if (cnt == 0) {
      perc.style.display = "none";
    } else {
      perc.style.display = "inline";
      icon.style.display = "none";
    }
    btn.style.background =
      "linear-gradient(0deg, var(--selected__)" +
      cnt * 25 +
      "%, var(--primary__)  " +
      cnt * 25 +
      "%)";

    perc.innerText = 100 + cnt * 25 + "%";
    if (cnt == 4) dir = 0;
  } else {
    if (dir == 0) {
      btn.style.background =
        "linear-gradient(0deg, var(--selected__)" +
        cnt * 25 +
        "%, var(--primary__)  " +
        cnt * 25 +
        "%)";
      perc.innerText = 100 + cnt * 25 + "%";
      if (cnt == 0) {
        dir = 1;
        perc.style.display = "none";
        icon.style.display = "inline";
      }
    }
  }
}

function changeLineHeight() {
  if (line_height_count < 4 && line_height_direction == 1) {
    line_height_count++;

    tile_fill(
      line_height_count,
      line_height_direction,
      document.getElementById("staccess__lineheight__btn"),
      document.getElementById("staccess__lineheight__perc"),
      document.getElementById("staccess__lineheight__icon")
    );

    if (line_height_count == 4) line_height_direction = 0;
    var style = document.createElement("style");
    style.id = "staccess-widget-line-height";
    style.innerHTML =
      `body *{ line-height:1.` + (line_height_count + 3) + ` !important}`;
    document.head.appendChild(style);
  } else {
    line_height_count--;
    tile_fill(
      line_height_count,
      line_height_direction,
      document.getElementById("staccess__lineheight__btn"),
      document.getElementById("staccess__lineheight__perc"),
      document.getElementById("staccess__lineheight__icon")
    );
    if (line_height_count == 0) {
      line_height_direction = 1;
      document.getElementById("staccess__lineheight__perc").style.display =
        "none";
      document.getElementById("staccess__lineheight__icon").style.display =
        "inline";
    }
    var style = document.createElement("style");
    style.id = "staccess-widget-line-height";
    style.innerHTML =
      `body *{ line-height:1.` + (line_height_count + 3) + ` !important}`;
    document.head.appendChild(style);
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
  // //console.log("--------UPPER DIV---------")
  // //console.log(upperDiv)
  // //console.log(bottomDiv)
  document.body.addEventListener("mousemove", (event) => {
    var mouseY = event.clientY +
        (document && document.scrollTop  || document.body && document.body.scrollTop  || 0) -
        (document && document.clientTop  || document.body && document.body.clientTop  || 0 );
    // //console.log("-------scroll test-----------")
    // //console.log("mouseY: ", mouseY)
    // //console.log("scroll top:", document.scrollTop);
    // //console.log("body scroll top:", document.body.scrollTop);
    // //console.log("event y:",event.clientY);
    // //console.log("window scrollY:", window.scrollY)
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
        // //console.log("body tag loaded");
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
  document.getElementById("staccess__clickandread__btn").style.display = "none";
  if (read_text_flag == 0) {
    document.getElementById("staccess__readtext__btn").style.background =
      selected__;
    document.getElementById("staccess__readtext_stop__btn").style.display =
      "inline";
    read_text_flag = 1;
    document.getElementById("staccess__readtext__img").src =
      cdnLink + "src/icons/pause.svg";
    // "../icons/pause.svg";
    //console.log("state", "start");
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
//console.log("comp",comp)

for(ix90=0;ix90<comp.length;ix90++){
  
  ////console.log("ix90",comp[ix90].innerHTML)
  try{
    if( !comp[ix90].classList.contains("staccess")){
      text+= comp[ix90].innerText;

      compText=comp[ix90].innerText;
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
//console.log("text",text)
var words   = text.trim().split(" ");
//console.log("words",words)
 words=words.filter(item => item.length !== 0) 
 //console.log("words2",words)
global_words = words;
// Draw the text in a div
drawTextInPanel(comp,compWords);

spokenTextArray = words;
utterance.text = text;
speechSynthesis.speak(utterance);

utterance.onboundary = function(event){
  //var e = document.querySelector("p").innerText;
  var word = getWordAt(comp.innerText,event.charIndex);
  // Show Speaking word : x
 // document.getElementById("word").innerText = word;
  //Increase index of span to highlight
  console.info(global_words[wordIndex]);
  //console.log("wordIndex",wordIndex)
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
      //console.log("words array "+[jx90],words_array[jx90]);
      // var panel = document.getElementById("panel");
      comp[jx90].innerText ='';
       for(var i = 0;i < words_array[jx90].length;i++){
         var html = '<span class="sta__span__" id="word_span_'+c+'">'+words_array[jx90][i]+'</span>&nbsp;';
         comp[jx90].innerHTML += html;
         //console.log("comp["+jx90+"].innerText",comp[jx90].innerText)
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
    //console.log("state", "pause");
  } else if (read_text_flag == 2) {
    if (speechSynthesis) {
      speechSynthesis.resume();
    }
    //console.log("state", "resume");
    read_text_flag = 1;
  }
}

function applyReadTextStop() {
  if (speechSynthesis) {
    speechSynthesis.cancel();
  }
  read_text_flag = 0;
  // document.getElementById("staccess__readtext_stop__btn").style.visibility =
  //   "hidden";
  // document.getElementById("staccess__readtext__img").src =
  //   cdnLink + "src/icons/audio.svg";
  // const spans = document.querySelectorAll(".sta__span__");

  // spans.forEach((span1) => {
  //   span1.remove();
  // });
  // location.reload();
  document.getElementById("staccess__clickandread__img").src =
    cdnLink + "src/icons/audio.svg";
  document.body
    .querySelectorAll("*.ta-a11y-widget-text-reader-hlight")
    .forEach((item, key) => {
      item.classList.remove("ta-a11y-widget-text-reader-hlight");
    });
}
function applyClickAndRead() {
  openSidebar();
  if (!read_click_text_flag) {
    read_click_text_flag = true;
    document.getElementById("staccess__clickandread__img").src =
      cdnLink + "src/icons/stop.svg";

    // document.getElementById("staccess__readtext__btn").style.display = "none";
    let shadowDiv = document.createElement("div");
    shadowDiv.id = "ta-a11y-works-widget-shadow-root";
    let shadowRoot = shadowDiv.attachShadow({ mode: "open" });
    let shadowChild = document.createElement("div");
    shadowChild.classList.add("ta-a11y-works-widget-shadow-content");
    let script = document.createElement("script");

    var style5 = document.createElement("style");
    style5.innerHTML = `
    .ta-a11y-widget-text-reader-hlight{background-color:#ffcc00;}
    `;
    style5.id = "ta-a11y-works-widget-reader-hlight";
    document.head.appendChild(style5);

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

     // target.style.background = "#ffcc00";
     target.classList.add("ta-a11y-widget-text-reader-hlight");
     

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
        //console.log(current_comp,endCount)
       
          // current_comp[endCount].style.background = "";
          current_comp[endCount].classList.remove("ta-a11y-widget-text-reader-hlight");
          endCount--;
          // if(endCount==0){
          //   current_comp[0].style.background = "";
          // }
        
      }

      // utterance.onboundary = function(event){
      //   //console.log(event.charIndex)
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
  } else {
    resetClickAndRead();
  }
}

function applyMonochrome() {
  if (!monochrome_flag) {
    document.getElementById("staccess__monochrome__btn").style.background =
      selected__;
    monochrome_flag = true;
    var style22 = document.createElement("style");
    style22.innerHTML = `
      body.ta-a11y-works-widget-grayscale1 {
        filter: grayscale(1); 
      }
    `;
    style22.id = "ta-a11y-works-widget-monochrome1";
    document.head.appendChild(style22);

    document.body.classList.add("ta-a11y-works-widget-grayscale1");
  } else {
    document.getElementById("staccess__monochrome__btn").style.background =
      primary__;
    monochrome_flag = false;
    document.body.classList.remove("ta-a11y-works-widget-grayscale1");
  }
}

function applyLinkHighlight() {
  if (!link_highlight_flag) {
    document.getElementById("staccess__linkhighlight__btn").style.background =
      selected__;
    link_highlight_flag = true;
    document.body.classList.add("ta-a11y-works-widget-link-highlight");
  } else {
    document.getElementById("staccess__linkhighlight__btn").style.background =
      primary__;
    link_highlight_flag = false;
    document.body.classList.remove("ta-a11y-works-widget-link-highlight");
  }
}
function applyHeadingHighlight() {
  if (!heading_highlight_flag) {
    document.getElementById(
      "staccess__headinghighlight__btn"
    ).style.background = selected__;
    heading_highlight_flag = true;
    document.body.classList.add("ta-a11y-works-widget-heading-highlight");
  } else {
    document.getElementById(
      "staccess__headinghighlight__btn"
    ).style.background = primary__;
    heading_highlight_flag = false;
    document.body.classList.remove("ta-a11y-works-widget-heading-highlight");
  }
}
function applyDisableAnimations() {
  if (!disable_animations_flag) {
    document.getElementById(
      "staccess__disableanimations__btn"
    ).style.background = selected__;
    disable_animations_flag = true;
    var style4 = document.createElement("style");
    style4.innerHTML = `
    
    body.ta-a11y-works-disable-animations *{
  
      transition-property: none !important;
      animation: none !important;
      animation-name: none !important;
    }
    
    `;
    style4.id = "ta-a11y-works-widget-disable-animations";
    document.head.appendChild(style4);
    document.body.classList.add("ta-a11y-works-disable-animations");
  } else {
    document.getElementById(
      "staccess__disableanimations__btn"
    ).style.background = primary__;
    disable_animations_flag = false;
    document.body.classList.remove("ta-a11y-works-disable-animations");
  }
}

function openSidebar() {
  //console.log("button clicked");
  if (
    document.getElementsByClassName("st_sidebar__")[0].style.visibility ==
    "visible"
  ) {
    document.getElementsByClassName("st_sidebar__")[0].style.visibility =
      "hidden";
    // document.getElementById("staccess__readtext_stop__btn").style.visibility =
    //   "hidden";
  } else {
    document.getElementsByClassName("st_sidebar__")[0].style.visibility =
      "visible";
  }
}
