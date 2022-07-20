'use strict';

// console.log('hello');

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieCityArray = [];

function CookieCity(name, min, max, avg, total) {
  this.cityName = name;
  this.minCookiesPerHour = min;
  this.maxCookiesPerHour = max;
  this.avgCookiesPerCustomer = avg;
  this.actualCookiesPerHour = total;
}
// need to get total before adding to array
let seattle = new CookieCity('Seattle', 23, 65, 6.3);
let tokyo = new CookieCity('Tokyo', 3, 24, 1.2);
let dubai = new CookieCity('Dubai', 11, 38, 3.7);
let paris = new CookieCity('Paris', 20, 38, 2.3);
let lima = new CookieCity('Lima', 2, 16, 4.6);
// console.log(seattle);
// console.log(tokyo);
// console.log(dubai);
// console.log(paris);
// console.log(lima);
totalCookieArray.push(seattle, tokyo, dubai, paris, lima);
cookieCityArray.push(seattle, tokyo, dubai, paris, lima);
console.log(cookieCityArray);

dailyTotal: 0,
totalCookieArray = [];

function randomCust() {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}
function totalCookPerHour() {
  for (let i = 0; i < storeHours.length; i++) {
    let custPerHour = this.randomCust();
    let cookiesPerHour = Math.ceil(custPerHour * this.avg);
    this.actualCookiesPerHour.push(totalCookieArray);
    this.dailyTotal += cookiesPerHour;
  }
}
// function render or this.render?
function render() {
  this.totalCookPerHour();
  let seattleData = document.getElementById('seattleSales');
  for (let i = 0; i < storeHours.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `${storeHours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
    seattleData.appendChild(listItem);
  }
  let totalCook = document.createElement('li');
  totalCook.textContent = `Total: ${this.dailyTotal}`;
  seattleData.appendChild(totalCook);
}

seattle.render();
