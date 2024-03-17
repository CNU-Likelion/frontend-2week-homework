const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const buttons = document.querySelectorAll(".button");
const customInput = document.querySelector('.select-input');
const showTip = document.querySelector(".display-amount-tip");
const showTotal = document.querySelector('.display-amount-total');

let billTotal = 0, people;
let tipAmount, total;


billInput.addEventListener("change", function() {
  billTotal = Number(billInput);
  // calculate();
})
peopleInput.addEventListener("change", function() {
  people = Number(peopleInput.value);
  // calculate();
})

let percent = 0;

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    percent = Number(button);
  })
})

// function calculate() {
//   if (billTotal != 0 && people != 0 && percent != 0){
//     tipAmount = (billTotal * (percent/100)) / people;
//     total = (billTotal + tipAmount) / people;
//     showTip.innerHTML = "$" + tipAmount.toFixed(2);
//     showTotal.innerHTML = "$" + total.toFixed(2);
//   }
// }

document.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("change", function() {
    billTotal = Number(billInput);
    people = Number(peopleInput.value);

    if (percent != 0) {
      tipAmount = (billTotal * (percent/100)) / people;
      total = (billTotal + tipAmount) / people;

      showTip.textContent = "$" + tipAmount.toFixed(2);
      showTotal.textContent = "$" + total.toFixed(2);

    }
  })
})