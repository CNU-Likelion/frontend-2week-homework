const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const buttons = document.querySelectorAll(".button");
const customInput = document.querySelector('.select-input');
const showTip = document.querySelector(".display-amount-tip");
const showTotal = document.querySelector('.display-amount-total');
const reset = document.querySelector('.container-button');
const inputs = document.getElementsByTagName('input');

let billTotal = 0;
let people = 0;
let tipAmount = 0;
let total = 0;

billInput.addEventListener("change", function() {
  billTotal = parseFloat(billInput);
})
peopleInput.addEventListener("change", function() {
  people = parseFloat(peopleInput.value);
  output();
})

let percent = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", function() {
    percent = parseFloat(btn.textContent);
  })
})

function output() {
  console.log(billTotal);
  console.log(people);
  console.log(percent);
  tipAmount = (billTotal * (percent/100)) / people;
  total = (billTotal + tipAmount) / people;
  showTip.innerHTML = "$" + tipAmount.toFixed(2);
  showTotal.innerHTML = "$" + total.toFixed(2);
}

reset.addEventListener("click", function() {
  billInput.value = '';
  peopleInput.value = '';
  showTip.innerHTML = "$0.00";
  showTotal.innerHTML = "$0.00";
})