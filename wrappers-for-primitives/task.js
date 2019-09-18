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
  if (typeof parsed === 'string') {
    parseInt(parsed);
    //переход на вычисление по формуле//
  }
  else if (typeof parsed === 'undefined'){
    console.log(`Параметр + ${parsed} + содержит неправильное значение ${parsed}`);
  } else {
    percent /= 1200;
    date *= 12;
    let totalAmount = amount - contribution;
     let payment = amount * (1 - Math.pow(1 + percent, -date));
     return payment;
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
    console.log("Привет, мир! Меня зовут " + name);
  }
  else if (typeof name === 'undefined') {
    console.log("Привет, Мир! Меня зовут Аноним");
  }
    return getGreeting;
}


  getGreeting('Анастасия');
