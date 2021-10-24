// //The DOM

let input = document.getElementById("input-area");
let customButton = document.getElementById("custom-button");
let totalTip = document.getElementById("total-tip");
let numberOfPeople = document.getElementById("numberOfPeople");
let tipPerPerson = document.getElementById("amount-per-person");
let resetButton = document.getElementById("reset-button");

//Button functionalities

function handleTip(tipPercentage) {
  if (numberOfPeople.value === "") {
    alert("enter the number of people");
  } else {
    let totalFee = input.value;
    let tipSum = (tipPercentage / 100) * totalFee;
    tipSum = tipSum.toFixed(2);
    totalTip.innerHTML = tipSum;

    let members = numberOfPeople.value;
    let perPerson = tipSum / members;
    perPerson = perPerson.toFixed(2);
    tipPerPerson.innerHTML = perPerson;
  }
}

function handleTips(tipButton) {
  const tipPercentage = tipButton.getAttribute("data-tip_percentage");
  tipButton.addEventListener("click", () => handleTip(tipPercentage));
}
let tipButtons = document.querySelectorAll(".tip_button");
tipButtons.forEach(handleTips);

customButton.addEventListener("click", () => {
  let tipPercentage = prompt("what is the Percentage tip");
  handleTip(tipPercentage);
});

//Reset_Button_functionality
resetButton.addEventListener("click", () => {
  input.value = "";
  numberOfPeople.value = "";
  totalTip.innerHTML = "";
  customButton.innerHTML = "Custo";
  tipPerPerson.innerHTML = "";
});
