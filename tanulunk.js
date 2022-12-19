// // Opening a folder in the terminal (in linux atleast) in VSCode using terminal: code -name of directory-
// // Ctrl+F5 = forced refresh to the page, downloading catche and such, can be useful
// // CTRL+K+C = comment multiple lines, CTRL+K+U to uncomment multiple lines

// first()  < Ez nem fut le, a többi viszont
// second();

// // function expression
// const first = function () {
//   console.log("first function");
// };

// // function declaration
// function second() {
//   console.log("second function");
// }

// first();
// second();

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = 1;

// while (a === 1) {
//   console.log("while works 1");
//   a = a + 1;
//   break;
// }

// do {
//   console.log("do works 1");
//   break;
// } while (a === 1);

// /////////////////////////////////////////////////////////////////////////////////////////////

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < list.length; i++) {
//   console.log("First for loop  +++++", i);
//   if (list[i] === 4) {
//     console.log("First for loop  ------");

//     continue;

//     console.log("First for loop ..........");
//   }
//   console.log("No number 4//////", list[i]);
// }

// for (let i = 0; i < list.length; i++) {
//   console.log("Full list, broken at number 6", list[i]);

//   if (list[i] === 6) {
//     break;
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////

// // Jimmy aszonta, csináljuk array-el is for clarity

// const speak = function (one = "Boki", two = "Roxi") {
//   console.log(`Hello argument ${one} and ${two}`);
// };

// speak();
// speak(one, "kacsa");
// const liba = "liba";
// speak("kacsa", liba);

//////////////

// const calcArea = function (radius) {
//   let area = 3.1415 * radius ** 2;
//   return area;
// };

// const konyha = calcArea(5);
// const furdoszoba = calcArea(11);

// console.log(calcArea(5), calcArea(11));
// console.log(konyha, "<konyha", furdoszoba, "<furdoszoba");

// function konyhaPluszFurdoszoba(a, b) {
//   return a + b;
// }

// const ketszoba = konyhaPluszFurdoszoba(calcArea(5), calcArea(11));

// console.log(ketszoba);

////////////////////////////////////

// // Arrow functions:
// // Don't use .this on arrow functions, see the Objects part of the code.

// const sayHello = function () {
//   return "hello";
// };

// Regular arrow function

// const sayHello1 = () => {
//   return "hello1";
// };
// // In the same line, we dont need the return and the {}

// const sayHello2 = () => "hello2";

// function sayHello3(a) {}

// // const saySomething = (something) => `Valami ` + something;

// console.log(sayHello3("asd"));
// console.log(saySomething("idemo"));
// console.log(sayHello());
// console.log(sayHello1());
// console.log(sayHello2());

// As a side note, there is a difference between them when using .this

// Methods:

//////////

// function findTwo(number) {
//   if (number === 2) return true;
// }

// const ketto = [1, 2, 3, 4].find(findTwo);

// const harom = [1, 2, 3, 4].find((number) => number === 3);

// console.log(ketto);

// console.log(harom);

// //

// let people = ["gazsi", "bandi", "idemo", "noobok", "report"];

// people.forEach((element, index, array) => {
//   console.log(element, index, array);
// });

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i], i, people);
// }

// const peopleFunction = () => {
//   for (let i = 0; i < people.length; i++) {
//     console.log(people[i], i, people);
//   }
// };

// peopleFunction();

//// forEach + map;

// people.forEach((a, b, c) => {
//   console.log(c, "all the arrays, array number of times.");
//   c.map((x) => {
//     console.log(x, "All the names separately, array number of times.");
//     if (x === "bandi") {
//       console.log(x, "The map function solobolo.");
//     }
//   });
// });

////////////////////////////////////////////////////////////////////////////////////////////////

// // Objects:

// let user = {
//   age: 12,
//   name: "borisz",
//   email: "idemoidemo@gmail.com",
// };

// console.log(user.name, user.age);

// // We usually use this:
// user.age = 25;

// // But this is also possible:
// user["name"] = "noobok";

// console.log(user["age"], user.name);

// // You can do this, but only with the 2nd one:

// const key = "name";

// user[key] = "newName"; // object.key doesn't work || try deleting the "asdasdasd"

// console.log(user.name);

////// We can add functions to the object key/value system:

// let object = {
//   name: "borisz",
//   goodSaying: ["idemo noobok", "console log this"],
//   logThis: function () {
//     // <<< IF THIS WAS AN ARROW FUNCTION IT WOULD NOT WORK, we can not use .this in arrow functions!
//     console.log("Borisz has said following: +++++");
//     this.goodSaying.forEach((x, s, d) => {
//       console.log(s, d, "Roxxiii");
//       console.log(x);
//       console.log(d[1], "<<<< console log this");
//     });
//   },
//   logThis1: () => {
//     console.log("Arrow function, this.goodSaying will be undefined");
//     console.log(this.goodSaying);
//   },
//   logThis2() {
//     console.log("Borisz has said following shortercode: ------------");
//   },
// };

// console.log(object);
// console.log("+++++++++++++++++++++++");
// object.logThis();
// object.logThis1();
// object.logThis2();

// // Essentially the same:

// function consoleLogSahings() {
//   console.log("Borisz has said following: //////////");
//   for (let i = 0; i < object.goodSaying.length; i++) {
//     console.log(object.goodSaying[i]);
//   }
// }

// consoleLogSahings();

// // Math:

// // Random number between 0 and 1:

// const random = Math.random();

// console.log(random);

// // Random number between 0 and 9:

// console.log(Math.round(random * 9));

// // space for comments from Csillag or other mentors:
