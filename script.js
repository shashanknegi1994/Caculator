let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");
let screenDisp = "";
buttons.forEach(function (items) {
  items.addEventListener("click", function () {
    let btnText = items.innerText;
    if (btnText === "+/-") {
      screenDisp = -screenDisp;
      display.value = screenDisp;
    } else if (btnText === "C" || btnText === "X") {
      screenDisp = "";
      display.value = screenDisp;
    } else if (btnText === "=") {
      screenDisp = eval(screenDisp);
      display.value = screenDisp;
    } else if (
      screenDisp === "" &&
      (btnText == "+" ||
        btnText == "-" ||
        btnText == "/" ||
        btnText == "*" ||
        btnText == "%")
    ) {
      display.value = NaN;
    } else {
      screenDisp += btnText;
      display.value = screenDisp;
    }
  });
});
