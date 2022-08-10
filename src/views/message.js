import html from "./message.html";
import "./message.css";
import "./sidebar.css";
import "./tile.css";

let elements = [];
let body;

export function show(text) {
  console.log("in show");

  // // convert plain HTML string into DOM elements
  // let temporary = document.createElement("div");
  // temporary.innerHTML = html;
  // //alert(temporary.innerHTML);
  // // temporary.getElementsByClassName("float__access")[0].style.backgroundColor =
  // //   "rgb(345,42,42)";

  // // append elements to body
  // // body = document.getElementsByTagName("body")[0];

  // while (temporary.children.length > 0) {
  //   elements.push(temporary.children[0]);
  //   document.body.appendChild(temporary.children[0]);
  // }
  // console.log(" temporary.innerHTML", temporary.innerHTML);
  // document.body.appendChild(temporary);
  // body.addEventListener("click", close);
  // console.log("event added");
}
export function setColor(color) {
  console.log("in color");
  let temporary = document.createElement("div");
  temporary.innerHTML = html;
  console.log(" temporary.innerHTML", temporary.innerHTML);
  // alert(temporary.getElementsByClassName("float__access")[0].innerHTML);

  //document.body.appendChild(temporary);
  body = document.getElementsByTagName("body")[0];
  while (temporary.children.length > 0) {
    document.body.appendChild(temporary.children[0]);
    elements.push(temporary.children[0]);
  }
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "fontFunctions.js"; //"http://localhost:8080/fd5d99e879e03ffd8765.js"; //"../functions/fontFunctions.js";
  document.body.appendChild(s);
  document.getElementsByClassName("float__access")[0].style.backgroundColor =
    color;
  document.getElementById("access__btn").addEventListener("click", openSidebar);

  //  applyAllFunctions();
}
export function close() {
  while (elements.length > 0) {
    elements.pop().remove();
  }
  body.removeEventListener("click", close);
}
export function openSidebar() {
  console.log("button clicked");
  if (
    document.getElementsByClassName("sidebar")[0].style.visibility == "visible"
  ) {
    document.getElementsByClassName("sidebar")[0].style.visibility = "hidden";
  } else {
    document.getElementsByClassName("sidebar")[0].style.visibility = "visible";
  }
}
// export function openSidebar() {
//   console.log("click event in open");
//   // document
//   //   .getElementById("access__btn")
//   //   .addEventListener("click", closeSidebar);
//   console.log("d", document.getElementById("access__btn").innerHTML);
//   let temporary = document.createElement("div");
//   temporary.innerHTML = html;
//   document.getElementsByClassName("sidebar")[0].style.visibility = "visible";

//   body = document.getElementsByTagName("body")[0];
//   while (temporary.children.length > 0) {
//     elements.push(temporary.children[0]);
//     body.appendChild(temporary.children[0]);
//   }

//   console.log("click event in open");
// }

/* on refreshing the page, 
 all the activated functionalities should be reactivated checking the cookies */
// function applyAllFunctions() {
//   dyslexiaFontSwitch();
// }
