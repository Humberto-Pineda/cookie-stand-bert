'use strict';

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  randomCust: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  totalCookPerHour: function() {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.randomCust();
      let cookiesPerHour = Math.ceil(custPerHour * this.avg);
      this.cookiesPerHourArray.push(cookiesPerHour);
      this.dailyTotal += cookiesPerHour;
    }
  },
  render: function() {
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
  },
};
seattle.render();

let tokyo = {
  name: 'Tokyo',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  randomCust: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  totalCookPerHour: function() {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.randomCust();
      let cookiesPerHour = Math.ceil(custPerHour * this.avg);
      this.cookiesPerHourArray.push(cookiesPerHour);
      this.dailyTotal += cookiesPerHour;
    }
  },
  render: function() {
    this.totalCookPerHour();
    let tokyoData = document.getElementById('seattleSales');
    for (let i = 0; i < storeHours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${storeHours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      tokyoData.appendChild(listItem);
    }
    let totalCook = document.createElement('li');
    totalCook.textContent = `Total: ${this.dailyTotal}`;
    tokyoData.appendChild(totalCook);
  },
};
tokyo.render();

let dubai = {
  name: 'Dubai',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  randomCust: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  totalCookPerHour: function() {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.randomCust();
      let cookiesPerHour = Math.ceil(custPerHour * this.avg);
      this.cookiesPerHourArray.push(cookiesPerHour);
      this.dailyTotal += cookiesPerHour;
    }
  },
  render: function() {
    this.totalCookPerHour();
    let dubaiData = document.getElementById('seattleSales');
    for (let i = 0; i < storeHours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${storeHours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      dubaiData.appendChild(listItem);
    }
    let totalCook = document.createElement('li');
    totalCook.textContent = `Total: ${this.dailyTotal}`;
    dubaiData.appendChild(totalCook);
  },
};
dubai.render();

let paris = {
  name: 'Paris',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  randomCust: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  totalCookPerHour: function() {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.randomCust();
      let cookiesPerHour = Math.ceil(custPerHour * this.avg);
      this.cookiesPerHourArray.push(cookiesPerHour);
      this.dailyTotal += cookiesPerHour;
    }
  },
  render: function() {
    this.totalCookPerHour();
    let parisData = document.getElementById('seattleSales');
    for (let i = 0; i < storeHours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${storeHours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      parisData.appendChild(listItem);
    }
    let totalCook = document.createElement('li');
    totalCook.textContent = `Total: ${this.dailyTotal}`;
    parisData.appendChild(totalCook);
  },
};
paris.render();

let lima = {
  name: 'Lima',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  randomCust: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  totalCookPerHour: function() {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.randomCust();
      let cookiesPerHour = Math.ceil(custPerHour * this.avg);
      this.cookiesPerHourArray.push(cookiesPerHour);
      this.dailyTotal += cookiesPerHour;
    }
  },
  render: function() {
    this.totalCookPerHour();
    let limaData = document.getElementById('seattleSales');
    for (let i = 0; i < storeHours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${storeHours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      limaData.appendChild(listItem);
    }
    let totalCook = document.createElement('li');
    totalCook.textContent = `Total: ${this.dailyTotal}`;
    limaData.appendChild(totalCook);
  },
};
lima.render();
