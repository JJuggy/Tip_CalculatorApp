// //The DOM

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let input = document.getElementById("input-area");
let customButton= document.getElementById('custom-button')
let totalTip = document.getElementById("total-tip");
let numberOfPeople = document.getElementById("numberOfPeople");
let tipPerPerson = document.getElementById("amount-per-person");
let resetButton = document.getElementById("reset-button");

//Button functionalities

function handleTip(tipPercentage) {
  if (numberOfPeople.value === "") {
    alert("enter the number of people");
  } else {
    let inputArea = input.value;
    let totalFee = inputArea;
    let tipSum = (tipPercentage / 100) * totalFee;
    tipSum = tipSum.toFixed(2);
    totalTip.innerHTML = tipSum;

    let members = numberOfPeople.value;
    let perPerson = tipSum / members;
    perPerson = perPerson.toFixed(2);
    tipPerPerson.innerHTML = perPerson;
  }
}

btn1.addEventListener("click", () => handleTip(5));
btn2.addEventListener("click", () => handleTip(10));
btn3.addEventListener("click", () => handleTip(15));
btn4.addEventListener("click", () => handleTip(20));
btn5.addEventListener("click", () => handleTip(25));

customButton.addEventListener("click", () => {

    let tipPercentage=prompt("what is the Percentage tip")
    if (numberOfPeople.value === "") {
        alert("enter the number of people");
      } else {
        let inputArea = input.value;
        customButton.innerHTML=tipPercentage;
        let totalFee = inputArea;
        let tipSum = (tipPercentage / 100) * totalFee;
        tipSum = tipSum.toFixed(2);
        totalTip.innerHTML = tipSum;
    
        let members = numberOfPeople.value;
        let perPerson = tipSum / members;
        perPerson = perPerson.toFixed(2);
        tipPerPerson.innerHTML = perPerson;
      }
})



//Reset_Button_functionality
resetButton.addEventListener("click", () => {
  input.value = " ";
  numberOfPeople.value = "";
  totalTip.innerHTML = "";
  customButton.innerHTML= "Custom"
  tipPerPerson.innerHTML = "";
});
