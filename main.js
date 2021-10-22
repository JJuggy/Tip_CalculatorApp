
// //The DOM
// let totalBill= document.getElementById('totalBill');

let button=document.getElementById('btn');
let input=document.getElementById("input-area");
let tipPercentage= document.getElementsByClassName("tip")
let totalTip= document.getElementById("total-tip")
let numberOfPeople= document.getElementById('numberOfPeople')
let tipPerPerson= document.getElementsByClassName("amount-per-person")





button.addEventListener('click',()=>{
    const inputArea=input.value
    let tipPercentage=5
    let totalFee= inputArea
    let tipPerPerson= (tipPercentage/100)* totalFee
    tipPerPerson=tipPerPerson.toFixed(2)
    totalTip.innerHTML= tipPerPerson
})

