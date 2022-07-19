'use strict';

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(storeHours);

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
    for (let i = 0; i < storeHours.length; i++) {
      
      console.log(seattle.totalCookPerStore);
    }
  }
};
console.log(seattle.randomCust());
console.log(seattle.totalCookPerHour());
console.log(seattle.totalCookPerStore());
