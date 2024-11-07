// let name = "Elsa"; // String literal
// let age = 30; // Number literal
// let isApproved = true; // Boolean literal can be true or false , you wanna have some logic
// let firstName = undefined; // not very common
// let selectedColor = null; // You can use this when you want to clear the value of the variable

// let person = {
//   name: "Elsa",
//   age: 30,
// };

// // dot notation
// person.name = "Mary";

// // braket notation
// let selection = 'name'
// person[selection] = "Jonny";

// console.log(person.name);

// let selectedColors = ["red", "blue"];
// selectedColors[2] = 1;
// console.log(selectedColors.length);

//performing a task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("Elsa", "Voda");

// calculating a value
function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);