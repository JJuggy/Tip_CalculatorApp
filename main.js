
// //The DOM
// let totalBill= document.getElementById('totalBill');

let button=document.getElementById('btn');
let tipPercentage= document.getElementsByClassName("tip")
let totalTip= document.getElementById("total-tip")
let numberOfPeople= document.getElementById('numberOfPeople')
let tipPerPerson= document.getElementsByClassName("amount-per-person")



function getInput(){
    inputArea=document.getElementById("input-area").value;
}


button.addEventListener('click',()=>{
    getInput();
    let tipPercentage=5
    let totalFee= inputArea
    let tipPerPerson= (tipPercentage/100)* totalFee
    tipPerPerson=tipPerPerson.toFixed(2)
    totalTip.innerHTML= tipPerPerson
})

