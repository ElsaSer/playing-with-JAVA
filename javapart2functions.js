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

//                  *********Exercises TIME for functions module *********
//1. Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.
//2.Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
// }

// const describeRomania = describeCountry("Romania", 21, "Bucharest");
// const describeUk = describeCountry("United Kingdon", 23, "London");
// const describeBelgium = describeCountry("Belgium", 19, "Brussels");

// console.log(describeRomania, describeUk, describeBelgium);

//                      *****Ex2****
// 1.The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.
// 2.To calculate the percentage, divide the given population value by 7900 and then multiply by 100.
// 3.Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.
// 4.Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentageRomania = percentageOfWorld1(21);
// const percentageUk = percentageOfWorld1(23);
// const percentageBelgium = percentageOfWorld1(19);

// console.log(percentageRomania, percentageUk, percentageBelgium);

// const percentageOfWolrd2 = function (population) {
//   return (population / 7900) * 100;
// };

// const percentageRomania2 = percentageOfWolrd2(21);
// const percentageUk2 = percentageOfWolrd2(23);
// const percentageBelgium2 = percentageOfWolrd2(19);

// console.log(percentageRomania2, percentageUk2, percentageBelgium2);

//              ******** EX 3 ********
//Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.
// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const percentageRomania3 = percentageOfWorld3(21);
// const percentageUk3 = percentageOfWorld3(23);
// const percentageBelgium3 = percentageOfWorld3(19);

// console.log(percentageRomania3, percentageBelgium3,percentageUk3);

//               ******** EX 4 ********

// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.
// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.
// Call describePopulation with data for 3 countries of your choice.

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// function describePopulation(country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} milion people , which is ${percentage} % of the world.}`;

//   console.log(description);
// }
// describePopulation("Romania", 21);
// describePopulation("UK", 19);
// describePopulation("Belgium", 23);

//            ******** EX 5 ********

// 1.Function Declaration: Write a function declaration called subtract that takes two parameters and returns their difference.
// 2.Function Expression: Write a function expression called multiply that takes two parameters and returns their product.
// 3.Combine Functions: Write a function expression called simpleCalculation that:
// -Takes three parameters: a, b, and c.
// -Uses the subtract function to find the difference between a and b.
// -Uses the multiply function to multiply the result by c.
// -Logs the intermediate result.
// -Returns the final result.

// function subtract(x, y) {
//   return x - y;
// }
// const multiply = function (x, y) {
//   return x * y;
// };
// const simpleCalculation = function (a, b, c) {
//   const difference = subtract(a, b);
//   console.log("Intermediate result:", difference);

//   const finalResult = multiply(difference, c);
//   console.log("Final result:", finalResult);
//   return finalResult;
// };

// console.log(simpleCalculation(10, 23, 12));

//            ******** EX 6 ********

// 1Function Declaration: Write a function declaration called sumArray that takes an array of numbers and returns the sum of all elements in the array.
// 2Function Expression: Write a function expression called average that takes an array of numbers and returns the average of all elements.
// 3Combine Functions: Write a function expression called arrayAnalysis that:
// -Takes an array of numbers.
// -Uses the sumArray function to find the sum of the elements.
// -Uses the average function to find the average of the elements.
// -Logs both the sum and the average.
// -Returns an object with properties for the sum and the average.

// function sumArray(x, y, z) {
//   return x + y + z;
// }
// const average = function (x, y, z) {
//   return (x + y + z) / 3;
// };
// const arrayAnalysis = function (x, y, z) {
//   const sum = sumArray(x, y, z);
//   console.log("Sum", sum);

//   const avg = average(x, y, z);
//   console.log("Avg", avg);

//   return { Sum: sum, Avg: avg };
// };

// console.log(arrayAnalysis(10, 20, 30));

//                ******** EX 7 ********
// Create a function called carrotCake. This function will take in three key ingredients and their quantities, and return a formatted string describing the recipe.
//The function should call another function, combinelngredients, which combines the ingredients.
// The ingredients are : flour, butter, carrots.
//• combineIngredients: This function takes the ingredients as arguments and returns a string saying "All ingredients
// combined."

// function carrotCake(flour, butter, carrots) {
//   return "All ingredients combined";
// }

// function combineIngredients(flour, butter, carrots) {
//   const combine = carrotCake(flour, butter, carrots);
//   return `For a delicious carrot cake , you will need:
//     ${flour} of flour
//     ${butter}of butter
//     ${carrots} shaved carrots
//     ${combine}`;
// }
// console.log(combineIngredients('0.5kg', 'half cup', 3 ));

//                ******** EX8  ********
// Create a function called chooseIceCreamFlavor. This function will take in one argument: flavor, and use if-else statements to return a string describing the selected flavor and a suggestion.
// Flavors:
// Vanilla: "Classic choice! How about adding some chocolate chips?"
// Chocolate: "Rich and delicious! Maybe top it with some strawberries?"
// Strawberry: "Fruity and fresh! Perfect with a drizzle of caramel."
// Functions:
// chooseIceCreamFlavor: This function takes flavor as an argument, uses if-else statements to determine the flavor and return the suggestion.

// const chooseIceCreamFlavor = function (flavor) {
//   if (flavor === "Vanilla") {
//     return "Classic choice! How about adding some chocolate chips?";
//   } else if (flavor === "Chocolate") {
//     return "Rich and delicious! Maybe top it with some strawberries?";
//   } else if (flavor === "Strawberry") {
//     return "Fruity and fresh! Perfect with a drizzle of caramel.";
//   } else {
//     return "You need to pick one of our flavours";
//   }
// };

// console.log(chooseIceCreamFlavor("Vanilla"));

//                ******** EX9  ********

// Create a function called calculateSimpleBMI. This function will take in two arguments: weight (in kilograms) and height (in meters). It will return a string describing the BMI and its category (Your BMI is 22.9, which is considered Normal weight.)
// BMI Calculation:
//       BMI = weight / (height * height)
// BMI Categories:
//       Underweight: BMI < 18.5
//       Normal weight: BMI 18.5 - 24.9
//       Overweight: BMI 25 - 29.9
//       Obesity: BMI 30 or higher

// const calculateSimpleBMI = function (weight, height) {
//   const bmi = weight / (height * height);
//   let category;

//   if (bmi < 18.5) {
//     category = "Underweight";
//   }
//   else if (bmi >=18.5 && bmi <=24.9) {
//     category = "Normal weight"
//   }
//   else if (bmi >=25 && bmi <=29.9) {
//     category = "Overweight"
//   }
//   else {
//     category = "Obesity"
//   }
//   return `You're BMI is ${bmi}, which is considered ${category}`
// };
// console.log(calculateSimpleBMI(65, 1.63));

//                ******** EX10  ********

// Create a function called calculatelnterest. This function will take three arguments: principal (the initial amount of money), rate (the interest rate per year as a percentage), and time (the
//     time the money is invested for in years). The function should calculate the simple interest using the
//     formula: interest= (principal * rate * time ) / 100

// function calculatelnterest(principal, rate, time) {
//   const interest = (principal * rate * time) / 100;
//   return `The interest is ${interest.toFixed(2)}`
// }
// console.log(calculatelnterest(3700, 12, 12));

//                ******** EX11  ********
// Function Declaration: Write a function declaration called
// subtract that takes two parameters and returns their
// diﬀerence.
//  Function Expression: Write a function expression called
// divide that takes two parameters and returns their quotient.
//  Combine Functions: Write a function expression called
// complexMath that:
//  Takes three parameters: a, b, and c.
//  Uses the subtract function to find the diﬀerence between a
// and b.
//  Uses the divide function to divide the result by c.
// Logs the intermediate result (diﬀerence).
// Returns the final result (quotient).

// function subtract(a, b) {
//   return a - b;
// }

// const divide = function (a, b) {
//   return a / b;
// };

// const complexMath = function (a, b, c) {
//   const difference = subtract(a, b);
//   console.log(`Intermediate result (difference)`, difference);

//   const quotient = divide(difference, c);
//   console.log(`Final result (quotient)`, quotient);

//   return quotient;
// };

// console.log(complexMath(2, 20, 1));



//                ******** EX12  ******** REVevim

// 1. Function Declaration: Write a function declaration called sumArray that takes an array of numbers and returns the sum of all elements in the array.
// 2.Function Expression: Write a function expression called average that takes an array of numbers and returns the average of all elements.
// 3.Combine Functions: Write a function expression called arrayAnalysis that:
// -Takes an array of numbers.
// -Uses the sumArray function to find the sum of the elements. -Uses the average function to find the average of the
// elements.
// -Logs both the sum and the average. -Returns an object with properties for the sum and the
// average.

