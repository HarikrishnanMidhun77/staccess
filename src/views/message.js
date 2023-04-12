import html from "./message.html";
import exp from "./expired.html";
import "./message.css";
import "./sidebar.css";
import "./tile.css";
import "./togglebar.css";
import "./widgetInject.css";
import { cdnLink, serverLink } from "../consts.js";

let elements = [];
let body;

const decipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  return (encoded) =>
    encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
};

export function setParams(params) {
  console.log("in color");
  document.cookie = "params=" + params + ";  path=/";
  const myDecipher = decipher("hari1983@");
  var decodedParams = myDecipher(params);
  console.log("decodedParams", decodedParams);

  const paramArr = decodedParams.split("::");
  var atkn = paramArr[2];
  console.log("atkn1", atkn);
  //TODO:change to monetize
  // fetch(serverLink + "api/v1/users/validateToken", {
  //   //TODO:chnage url
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ token: atkn }),
  // }).then(async (res) => {
  //   var r = await res.json();
  //   console.log("Request complete! response json:", r);
  //   if (!r.isValid) {
  //     let temporary = document.createElement("div");
  //     temporary.innerHTML = exp;
  //     console.log(" temporary.innerHTML exp", temporary.innerHTML);
  //     // alert(temporary.getElementsByClassName("float__access")[0].innerHTML);

  //     //document.body.appendChild(temporary);
  //     body = document.getElementsByTagName("body")[0];
  //     while (temporary.children.length > 0) {
  //       document.body.appendChild(temporary.children[0]);
  //       elements.push(temporary.children[0]);
  //     }
  //     var s = document.createElement("script");
  //     s.type = "application/javascript";
  //     s.src = cdnLink + "dist/fd5d99e879e03ffd8765.js"; //cdnLink + "dist/fd5d99e879e03ffd8765.js"; // cdnLink + "dist/fd5d99e879e03ffd8765.js"; //cdnLink + "src/functions/fontFunctions.js"; //"http://localhost:8080/fd5d99e879e03ffd8765.js"; //"../functions/fontFunctions.js";
  //     document.body.appendChild(s);
  //   } else {
  //     let temporary = document.createElement("div");
  //     temporary.innerHTML = html;
  //     // console.log(" temporary.innerHTML", temporary.innerHTML);
  //     // alert(temporary.getElementsByClassName("float__access")[0].innerHTML);

  //     //document.body.appendChild(temporary);
  //     body = document.getElementsByTagName("body")[0];
  //     while (temporary.children.length > 0) {
  //       document.body.appendChild(temporary.children[0]);
  //       elements.push(temporary.children[0]);
  //     }
  //     var s = document.createElement("script");
  //     s.type = "application/javascript";
  //     //TODO: uncomment
  //     s.src = cdnLink + "dist/fd5d99e879e03ffd8765.js"; //cdnLink + "dist/fd5d99e879e03ffd8765.js"; // cdnLink + "dist/fd5d99e879e03ffd8765.js"; //cdnLink + "src/functions/fontFunctions.js"; //"http://localhost:8080/fd5d99e879e03ffd8765.js"; //"../functions/fontFunctions.js";
  //     document.body.appendChild(s);
  //   }

  //   document.getElementsByClassName("float__access")[0].style.backgroundColor =
  //     paramArr[0];

  //   switch (paramArr[1]) {
  //     case "0":
  //       // right bottom
  //       break;
  //     case "1":
  //       //left bottom

  //       document.getElementsByClassName("float__access")[0].style.left = "40px";
  //       document.getElementsByClassName("float__access")[0].style.right = "0px";
  //       break;
  //     case "2":
  //       //left top
  //       document.getElementsByClassName("float__access")[0].style.bottom =
  //         "0px";
  //       document.getElementsByClassName("float__access")[0].style.top = "40px";
  //       document.getElementsByClassName("float__access")[0].style.left = "40px";
  //       document.getElementsByClassName("float__access")[0].style.right = "0px";
  //       break;
  //     case "3":
  //       // right top
  //       document.getElementsByClassName("float__access")[0].style.bottom =
  //         "0px";
  //       document.getElementsByClassName("float__access")[0].style.top = "40px";
  //       break;
  //   }
  // });

  let temporary = document.createElement("div");
  temporary.innerHTML = html;
  body = document.getElementsByTagName("body")[0];
  while (temporary.children.length > 0) {
    document.body.appendChild(temporary.children[0]);
    elements.push(temporary.children[0]);
  }
  var s = document.createElement("script");
  s.type = "application/javascript";
  //TODO: uncomment
  s.src = cdnLink + "dist/fd5d99e879e03ffd8765.js"; //cdnLink + "dist/fd5d99e879e03ffd8765.js"; // cdnLink + "dist/fd5d99e879e03ffd8765.js"; //cdnLink + "src/functions/fontFunctions.js"; //"http://localhost:8080/fd5d99e879e03ffd8765.js"; //"../functions/fontFunctions.js";
  document.body.appendChild(s);

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
