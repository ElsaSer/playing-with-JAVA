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
//you can call it before you define it (initialization)
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// //function EXPRESSION  (the function here is an anounymous frunction , it has no name)
//if the function is a value you can store it in a variable
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

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsTillRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired🎉`);
//     return -1;
//   }
// };

// console.log(yearsTillRetirement(1991, "Elsa"));
// console.log(yearsTillRetirement(1950, "Ade"));

// exercises:
// Each team(teamDolphins and teamKoalas) competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:
// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(`Test data 1 - Dolphins ${scoreDolphins}, Koalas ${scoreKoalas}`);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// console.log(`Test data 2 - Dolphins ${scoreDolphins}, Koalas ${scoreKoalas}`);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };

// checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
// checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));