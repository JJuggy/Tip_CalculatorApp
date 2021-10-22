
// //The DOM

let btn1=document.getElementById('btn1');
let btn2=document.getElementById('btn2');
let btn3=document.getElementById('btn3');
let btn4=document.getElementById('btn4');
let btn5=document.getElementById('btn5');
let input=document.getElementById("input-area");
let tipPercentage= document.getElementsByClassName("tip")
let totalTip= document.getElementById("total-tip")
let numberOfPeople= document.getElementById('numberOfPeople')
let tipPerPerson= document.getElementById("amount-per-person")
let resetButton=document.getElementById('reset-button')
let btns=document.querySelectorAll(".btns")



//Button functionalities

btn1.addEventListener('click',()=>{
    if(numberOfPeople.value===''){
        alert("enter the number of people")
    } else{
        let inputArea=input.value
        let tipPercentage=5
        let totalFee= inputArea
        let tipSum= (tipPercentage/100)* totalFee
        tipSum=tipSum.toFixed(2)
        totalTip.innerHTML= tipSum


        let members=numberOfPeople.value
        let perPerson= tipSum/members
        perPerson=perPerson.toFixed(2)
        tipPerPerson.innerHTML=perPerson
    }

})
btn2.addEventListener('click',()=>{
    if(numberOfPeople.value===''){
        alert("enter the number of people")
    } else{
        let inputArea=input.value
        let tipPercentage=10
        let totalFee= inputArea
        let tipSum= (tipPercentage/100)* totalFee
        tipSum=tipSum.toFixed(2)
        totalTip.innerHTML= tipSum


        let members=numberOfPeople.value
        let perPerson= tipSum/members
        perPerson=perPerson.toFixed(2)
        tipPerPerson.innerHTML=perPerson
    }

})
btn3.addEventListener('click',()=>{
    if(numberOfPeople.value===''){
        alert("enter the number of people")
    } else{
        let inputArea=input.value
        let tipPercentage=15
        let totalFee= inputArea
        let tipSum= (tipPercentage/100)* totalFee
        tipSum=tipSum.toFixed(2)
        totalTip.innerHTML= tipSum


        let members=numberOfPeople.value
        let perPerson= tipSum/members
        perPerson=perPerson.toFixed(2)
        tipPerPerson.innerHTML=perPerson
    }

})
btn4.addEventListener('click',()=>{
    if(numberOfPeople.value===''){
        alert("enter the number of people")
    } else{
        let inputArea=input.value
        let tipPercentage=20
        let totalFee= inputArea
        let tipSum= (tipPercentage/100)* totalFee
        tipSum=tipSum.toFixed(2)
        totalTip.innerHTML= tipSum


        let members=numberOfPeople.value
        let perPerson= tipSum/members
        perPerson=perPerson.toFixed(2)
        tipPerPerson.innerHTML=perPerson
    }

})
btn5.addEventListener('click',()=>{
    if(numberOfPeople.value===''){
        alert("enter the number of people")
    } else {
        let inputArea=input.value
        let tipPercentage=25
        let totalFee= inputArea
        let tipSum= (tipPercentage/100)* totalFee
        tipSum=tipSum.toFixed(2)
        totalTip.innerHTML= tipSum


        let members=numberOfPeople.value
        let perPerson= tipSum/members
        perPerson=perPerson.toFixed(2)
        tipPerPerson.innerHTML=perPerson
    }

})

//Reset_Button_functionality
resetButton.addEventListener('click',()=>{
    
   input.value=' '
   numberOfPeople.value=''
    totalTip.innerHTML=' '
    tipPerPerson.innerHTML=' '
})

