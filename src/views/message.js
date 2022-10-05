import html from "./message.html";
import "./message.css";
import "./sidebar.css";
import "./tile.css";
import "./togglebar.css";
import "./widgetInject.css";
import { cdnLink } from "../consts.js";

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
export function setParams(params) {
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
  s.type = "application/javascript";
  s.src = cdnLink + "dist/fd5d99e879e03ffd8765.js"; // cdnLink + "dist/fd5d99e879e03ffd8765.js"; //cdnLink + "src/functions/fontFunctions.js"; //"http://localhost:8080/fd5d99e879e03ffd8765.js"; //"../functions/fontFunctions.js";
  document.body.appendChild(s);

  const paramArr = params.split("::");
  document.getElementsByClassName("float__access")[0].style.backgroundColor =
    paramArr[0];

  switch (paramArr[1]) {
    case "0":
      // right bottom
      break;
    case "1":
      //left bottom

      document.getElementsByClassName("float__access")[0].style.left = "40px";
      document.getElementsByClassName("float__access")[0].style.right = "0px";
      break;
    case "2":
      //left top
      document.getElementsByClassName("float__access")[0].style.bottom = "0px";
      document.getElementsByClassName("float__access")[0].style.top = "40px";
      document.getElementsByClassName("float__access")[0].style.left = "40px";
      document.getElementsByClassName("float__access")[0].style.right = "0px";
      break;
    case "3":
      // right top
      document.getElementsByClassName("float__access")[0].style.bottom = "0px";
      document.getElementsByClassName("float__access")[0].style.top = "40px";
      break;
  }
  //document.getElementById("access__btn").addEventListener("click", openSidebar);

  // TODO: split color param with : and add color and position

  //  applyAllFunctions();
}
export function close() {
  while (elements.length > 0) {
    elements.pop().remove();
  }
  body.removeEventListener("click", close);
}
// export function openSidebar() {
//   console.log("button clicked");
//   if (
//     document.getElementsByClassName("st_sidebar__")[0].style.visibility ==
//     "visible"
//   ) {
//     document.getElementsByClassName("st_sidebar__")[0].style.visibility =
//       "hidden";
//     document.getElementById("staccess__readtext_stop__btn").style.visibility =
//       "hidden";
//   } else {
//     document.getElementsByClassName("st_sidebar__")[0].style.visibility =
//       "visible";
//   }
// }
// export function openSidebar() {
//   console.log("click event in open");
//   // document
//   //   .getElementById("access__btn")
//   //   .addEventListener("click", closeSidebar);
//   console.log("d", document.getElementById("access__btn").innerHTML);
//   let temporary = document.createElement("div");
//   temporary.innerHTML = html;
//   document.getElementsByClassName("st_sidebar__")[0].style.visibility = "visible";

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
