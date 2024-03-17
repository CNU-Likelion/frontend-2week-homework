const billInput = document.querySelector(".input_bill");
const peopleInput = document.querySelector(".input_numOFpeople");
const tipAmountPerson = document.getElementById("output-tip");
const totalPerson = document.getElementById("output-total");
const selectTipInputs = document.querySelectorAll(".input_selectTIPS");
const tipCustom = document.querySelector(".tip-custom");
const resetButton = document.querySelector(".output_reset");

billInput.value = "0.0";
peopleInput.value = "1";
tipAmountPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let selectTipValue = 0.5;

billInput.addEventListener("input", function () {
  billValue = parseFloat(billInput.value);
  calculateTip();
});

peopleInput.addEventListener("input", function () {
  peopleValue = parseFloat(peopleInput.value);
  calculateTip();
});

selectTipInputs.forEach(function (input) {
  input.addEventListener("click", function () {
    selectTipValue = parseFloat(input.textContent) / 100;
    calculateTip();
  });
});

tipCustom.addEventListener("input", function () {
  selectTipValue = parseFloat(tipCustom.value) / 100;
  calculateTip();
});

function calculateTip() {
  let tipAmount = (billValue * selectTipValue) / peopleValue;
  let total = billValue / peopleValue + tipAmount;
  tipAmountPerson.innerHTML = "$" + tipAmount.toFixed(2);
  totalPerson.innerHTML = "$" + total.toFixed(2);
}

resetButton.addEventListener("click", function () {
  billInput.value = "0.0";
  billValue = parseFloat(billInput.value);
  peopleInput.value = "1";
  peopleValue = parseFloat(peopleInput.value);
  tipCustom.value = "";
  calculateTip();
});
