"use strict";
const button = document.querySelector("button");
// // OR WITHOUT EXCLAMATION MARK!!! :
// if (button) {
//   button.addEventListener("click", () => {
//     console.log("Clicked!");
//   });
// }
function clickHandler(message) {
    console.log("Clicked! " + message);
}
// button.addEventListener("click", () => {
//   console.log("Clicked!");
// });
button.addEventListener("click", clickHandler.bind(null, "You're welcome"));
//# sourceMappingURL=app.js.map