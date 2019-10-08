function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
"use strict"
let parsed = (percent, contribution, amount, date);
  //if (typeof parsed === 'string') {
  //  parseInt(parsed);
    //переход на вычисление по формуле///}

  else if (typeof parsed === 'undefined'){
    console.log(`Параметр + ${parsed} + содержит неправильное значение ${parsed}`);
  } else {
    let i = parseFloat(percent/100/12);
    let n = parseFloat(date*12);
    let totalAmount = amount - contribution;
     let payment =amount * (1 - Math.pow(1 + i, -n));
  return totalAmount;
  }
}

calculateTotalMortgage(10, 0, 50000, 'ппэ');


function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
  if (typeof name === 'string') {
    return("Привет, мир! Меня зовут " + name);
  }
  else if (typeof name === 'undefined') {
    return("Привет, Мир! Меня зовут Аноним");
  }
    return getGreeting;
}


  getGreeting('Анастасия');
