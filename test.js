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

// function Car (brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }


// console.log(Car);
// console.log(new Car('Audi', 'Q3', 36000));
// console.log(new Car('BMW', 'X5', 58900));
// console.log(new Car('Nissan', 'Murano', 31700));


// //  функция была объявлена  вначале. А если бы я написал НАПРИМЕР: const Car = function (brand, model, price) {
// //   this.brand = brand;
// //   this.model = model;
// //   this.price = price;}
// //   это не то же самое? Когда как правильно писать?



// 5-4-19Выполни рефакторинг функции-конструктора Car так, чтобы она принимала один параметр -
//  объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) функции.

// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));



//??? 5-5-19Добавь в свойство prototype функции-конструктора Car два метода:
// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
  
// }

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function(newPrice) {
//   this.price = newPrice;
// };

// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })

// console.log(Car.prototype.hasOwnProperty('getPrice'));
// console.log(Car.prototype.hasOwnProperty('changePrice'));
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));


// console.log(audi);  
// // - это же ссылка. почему внутри 36000, а не 35000? а в _proto_ 35000
// console.log(audi.getPrice());
// audi.changePrice(35000);
// console.log(audi.getPrice());
// console.log(audi);



// 5-6-19Напиши функцию-конструктор Storage, которая будет создавать объекты для управления складом товаров.
//  Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Добавь методы на прототип:
// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в тойпоследовательности, в которой твой код будут проверять тесты.
//  Пожалуйста ничего там не меняй.

// function Storage(items) {
//   this.items = items;
// };

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function(newItem) {
//    this.items.push(newItem);
// };

// Storage.prototype.removeItem = function(item) {
//   this.items.splice(this.items.indexOf(item), 1);
//   // this.items.map(function(elem, index) {
//   //   if (elem === item) {
//   //     this.items.splice(index, 1);
//   //   }
    
//   // });
// };



// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);


// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// Storage.prototype.hasOwnProperty('getItems');
// Storage.prototype.hasOwnProperty('addItem');
// Storage.prototype.hasOwnProperty('removeItem');
// new Storage([ 'Нанитоиды', 'Пролонгер', 'Антигравитатор' ]);



// 5-7-19Напиши функцию-конструктор StringBuilder, которая принимает один параметр baseValue -
//  произвольную строку, которая записывается на создаваемый объект в свойство value.
// Добавь методы на прототип:
// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. 
// Пожалуйста ничего там не меняй.

function StringBuilder (baseValue) {
  this.value = baseValue;
}
StringBuilder.prototype.getValue = function() {
  return this.value;
}

StringBuilder.prototype.padEnd = function(str) {
  return this.value += str;
}

StringBuilder.prototype.padStart = function(str) {
  return this.value = str + this.value; 
}

StringBuilder.prototype.padBoth = function(str) {
  return this.value = str + this.value + str;
}


// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='