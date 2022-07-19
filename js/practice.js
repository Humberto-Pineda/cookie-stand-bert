// 'use strict';

// let hour = ['6a.m.', '7a.m.', '8a.m.'];

// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   getRandomCustomers: function() {
//     return Math.floor(Math.random() * (this.max -
//     this.min + 1) + this.min);
//   },
//   calcCookiesPerHour: function() {
//     let customersThisHour = this.getRandomCustomers();
//     let cookiesSoldThisHour = Math.ciel(customersThisHour * this.avg);
//     console.log(cookiesSoldThisHour);
//   }
// };
// console.log(seattle.getRandomCustomers());

// Lab 7 - put data in tables
// Lab 8 - add some CSS
// lab 9 - polish it up
// ****************************************************************************
// // objects

// let cat = [
//   'Axel',
//   6,
//   'yellow tabby',
//   true,
//   true
// ];

// let axel = {
//   // key value pair
//   // property:'name'
//   name: 'Axel',
//   age: 6,
//   breed: 'yellow tabby',
//   vaccinated: {
//     distemper: true,
//     rabies: true,
//     felv: true,
//   },
//   favToys:['lazer pointer', 'stuff', 'mouse'],
//   spayNeuter: true,
//   'favorite cat food': 'meow mix',
//   log: function(word) {
//   console.log(word);
//   },
//   about: function() {
//     console.log('My cat ${axel.name} is ${axel.age} years old');
//   },

// };


// // logging the objext
// console.log(axel);

// // dot notation
// console.log(axel.age);

// console.log(cat[2]);
// console.log(axel['breed']);
// console.log(axel.breed);

// // when you see a '.' it defines a property of an object
// console.log(cat.length);

// // key names with spaces: bracket notation
// console.log(axel['favorite cat food']);

// axel.isHungry = true;
// console.log(axel);



// // axel.hungry = prompt('Is Axel Hungry?');
// // console.log(axel.hungry);

// axel.speak = function() {
//   console.log('Meow!');
// }

// axel.speak();

// console.log()
// console.log(console);

// // methods = funcional logic thats assigned to a property on an object

// axel.log('i am Axel');

// axel.about();
