'use strict';

// 5-1-19Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;


// console.log(parent.hasOwnProperty('surname'));
// console.log(parent.hasOwnProperty('heritage'));
// console.log(child.hasOwnProperty('name'));
// console.log(child.name);
// console.log(child.hasOwnProperty('age'));
// console.log(child.age);
// console.log(child.hasOwnProperty('heritage'));
// console.log(child.heritage);
// console.log(child);


// 5-2-19Измени код, построив цепочку прототипов так, чтобы объект ancestor 
// был прототипом для parent, а тот в свою очередь был прототипом для child.

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки

// console.log(parent.isPrototypeOf(child));
// console.log(parent.surname);
// console.log(parent.heritage);
// console.log(parent.hasOwnProperty('surname'));
// console.log(parent.hasOwnProperty('heritage'));
// console.log(ancestor.isPrototypeOf(parent));
// console.log(child.hasOwnProperty('surname'));
// console.log(child.surname);
// console.log(child.heritage);
// console.log(child.hasOwnProperty('heritage'));
// console.log(ancestor.heritage);
// console.log(ancestor.hasOwnProperty('surname'));
// console.log(ancestor.hasOwnProperty('heritage'));
// console.log(ancestor.surname);
// console.log(ancestor);
// console.log(parent);
// console.log(child);



// ??? 5-3-19 (начало пустое)
// Объяви функцию-конструктор Car которая принимает три параметра:
// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, model и price,
//  значениями которых должны быть переданные аргументы во время её вызова с оператором new.

const Car = function (brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}


console.log(Car);
console.log(new Car('Audi', 'Q3', 36000));
console.log(new Car('BMW', 'X5', 58900));
console.log(new Car('Nissan', 'Murano', 31700));


//  функция была объявлена  вначале. А если бы я написал НАПРИМЕР: const Car = function (brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;}
//   это не то же самое? Когда как правильно писать?