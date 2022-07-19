'use strict';

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  open: 6,
  close: 20,
  randomCust: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  totalCookPerHour: function() {
    let custPerHour = this.randomCust();
    let cookiesPerHour = Math.ceil(custPerHour * this.avg);
    console.log(cookiesPerHour);
    console.log(custPerHour);
  },
  totalCookPerStore: function() {
    for (let i = 0; i < 14; i++)
      console.log(this.totalCookPerStore);
  }
};
console.log(seattle.randomCust());
console.log(seattle.totalCookPerHour());
console.log(seattle.totalCookPerStore());
