"use strict"; //use always this mode ***

//                 ***FUNCTIONS***

//apples,oranges, mango are parameters
// function fruitProcessor(apples, oranges, mango) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges and ${mango} mangoes`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0, 1);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 3, 2);
// console.log(appleOrangeJuice);

// const mangoJuice = fruitProcessor(1, 2, 5);
// console.log(mangoJuice); //3,2,1 are arguments

//      *** FUNCTION DECLARATION VS EXPRESSION ***

//you can call function DECLARATION before they are defined in the code

//function DECLARATION
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// //function EXPRESSION
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

//             *** ARROW FUNCTIONS ***

//i took the function expression just to comapare with the arrow one

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
//            arrow one here⬇️

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsTillRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
// //   return retirement;

// };

// const retirementYears = yearsTillRetirement(1991);
// console.log(retirementYears);

//       ***FUNCTIONS CALLING OTHER FUNCTIONS***

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//     ** FUNCTIONS REVIEW **

const calcAge = function(birthYear){
  return 2037 - birthYear;
}

const yearsTillRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

yearsTillRetirement(1991, Elsa)