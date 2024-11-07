// const elsaArray = [
//   "Elsa",
//   "Sereteanu",
//   2037 - 1990,
//   "programator",
//   ["Michael", "Jason", "Max"],
// ];

// const elsa = {
//   firstName: "Elsa",
//   lastName: "Sereteanu",
//   age: 2037 - 1990,
//   job: "programator",
//   friends: ["Michael", "Jason", "Max"],
// };
//so , the elsa object has 5 proprieties with a value of each.
// the big difference between objects and arrays is that in objects the order of these values dont matter when we want to retrieve them.
//in arrays the order in which we specify elements matters a lot because that is how we acces these elements , so we can acces the arrays using their order number.
//so we should use arrays for more order data and objects for more unstructured data.

//  ****DOT VS BRAKET NOTATION****
// const elsa = {
//   firstName: "Elsa",
//   lastName: "Sereteanu",
//   age: 2037 - 1990,
//   job: "programator",
//   friends: ["Michael", "Jason", "Max"],
// };
// console.log(elsa);

// console.log(elsa.lastName); //this is the dot one

// console.log(elsa["lastName"]); //you can put any expression that you like in the square brakets , so you don't need to write explicity the string here .

// const nameKey = "Name";
// console.log(elsa["first" + nameKey]);
// console.log(elsa["last" + nameKey]);

// const interestIn = prompt(
//   "What do you want to know about Elsa ? Choose between first name, last name, age, job and friends!"
// );
// console.log(elsa[interestIn]);

// if (elsa[interestIn]) {
//   console.log(elsa[interestIn]);
// } else {
//   console.log(
//     "wrong request!Choose between first name, last name, age, job and friends"
//   );
// }

// elsa.location = "London";
// elsa["instagram"] = "@bells.els";
// console.log(elsa);

// //Chanlange
// //'Elsa has 3 friends, and his best friends is called Michael'
// console.log(
//  ` ${elsa.firstName} has ${elsa.friends.length }, and his best friend is called ${elsa.friends[0]} `
// );

//       TO DO LIST TO DO LIST  TO DOOOO LISSSST

// const todoList = [];

// function addTodo() {
//   const todoInput = document.getElementById("todoInput").value;
//   if (todoInput) {
//     todoList.push(todoInput);
//     displayTodos();
//     document.getElementById("todoInput").value = '';
//   }
// }

// function displayTodos() {
//   const ul = document.getElementById("todoList");
//   ul.innerHTML = '';  // Clear the existing list
//   todoList.forEach((item, index) => {
//     const li = document.createElement("li");
//     li.textContent = `${index + 1}. ${item}`;
//     ul.appendChild(li);
//   });
// }

//            ***** Objects methods****
// const elsa = {
//   firstName: "Elsa",
//   lastName: "Sereteanu",
//   birthYear: 1990,
//   job: "programator", //string value
//   friends: ["Adelina", "Elena", "Marco"], //array value
//   hasDriverLicense: true, //boolean value

//   //here the calcAge is a property of elsa object
//   //   calcAge: function (birthYear) {
//   //     return 2037 - birthYear;
//   //   }, //function value
//   // };

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function(){
// return`${this.firstName} is a ${this.calcAge()}- year old ${elsa.job}, and she has ${this.hasDriverLicense ? 'a' : 'no'} driver's license `
//   }
// };
// console.log(elsa.calcAge());

// console.log(elsa.age);
// console.log(elsa.age);
// console.log(elsa.age);

// // "Elsa is a 47- year old programator, and she has a driver's licence"
// console.log(elsa.getSummary());

/**                  CHALANGE 3 JONNY
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

1.For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
2.Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.
3.Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
 */

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
// } else {
//   console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`);
// }

//             ITERATION : THE FOR LOOP

// console.log("Lifting weights repetition 1💪🏼");
// console.log("Lifting weights repetition 2💪🏼");
// console.log("Lifting weights repetition 3💪🏼");
// console.log("Lifting weights repetition 4💪🏼");
// console.log("Lifting weights repetition 5💪🏼");
// console.log("Lifting weights repetition 6💪🏼");
// console.log("Lifting weights repetition 7💪🏼");
// console.log("Lifting weights repetition 8💪🏼");
// console.log("Lifting weights repetition 9💪🏼");
// console.log("Lifting weights repetition 10💪🏼");

//for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}💪🏼`);
// }

//          LOOPING ARRAYS , BREAKING AND CONTINUING

// const elsaArray = [
//   "Elsa",
//   "Sereteanu",
//   2037 - 1990,
//   "programator",
//   ["Michael", "Jason", "Max"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < elsaArray.length; i++) {
//   //reading from elsa array
//   console.log(elsaArray[i], typeof elsaArray[i]);

//   //filling tyoes array
//   // this ⬇️
//   // types[i] = typeof elsaArray[i];
//   //or this more cleaner⬇️
//   // types.push(typeof elsaArray[i])
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// //CONTINUE AND BREAK STATEMENT
// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < elsaArray.length; i++) {
//   if (typeof elsaArray[i] !== "string") continue;

//   console.log(elsaArray[i], typeof elsaArray[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < elsaArray.length; i++) {
//   if (typeof elsaArray[i] === "number") break;

//   console.log(elsaArray[i], typeof elsaArray[i]);
// }

//LOOPING BACKWARDS AND LOOPS IN LOOPS 
