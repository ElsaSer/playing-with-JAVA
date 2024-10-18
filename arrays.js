// const friend1 = "Adelina";
// const friend2 = "Petru";
// const friend3 = "Matei";

// const friends = ["michael", "steven ", " marcus"]; //literal sintax
// console.log(friends);

// //or we can write it like this , with the 'new' keyword and 'Array' as well
// const y = new Array(1990, 1992, 1892, 1902);

// console.log(friends[1]);
// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Ela"; //we can change the element of an array
// console.log(friends);
// //as you can see the variable declared with const could change here because only primitive values are immutable , so arrays are not primitive values , so we can always change them !

// const firstName = "Elsa";
// const elsa = [firstName, "Sereteanu", 2020 - 1990, "programator", friends];
// console.log(elsa);
// console.log(elsa.length);

// //exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

//         *****BASIC ARRAY OPERATIONS (METHODS)*****
// PUSH method
// const friends = ["michael", "steven", " marcus"];

// //add elements
// const newLenght = friends.push("mary");
// console.log(friends);
// console.log(newLenght);

// friends.unshift("baba");
// console.log(friends);

// //remove elements
// friends.pop(); //last element will be removed
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //first element will be removed
// console.log(friends);
// console.log(friends.indexOf("steven"));

// console.log(friends.includes("steven"));
// console.log(friends.includes("bob"));

// if (friends.includes('steven')){
//     console.log('You have a frined called Steven');
// }

//Chanllange
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// And now let's use arrays! So, create an array called bills containing the test data below.
// Create an array called tips containing the tip value for each bill, calculated from the function you created before.
// BONUS: Create an array totals containing the total values, so the bill + tip.
// TEST DATA: 125, 555, and 44.

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;  this is the arrow function

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

