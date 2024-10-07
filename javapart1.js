// let age = 30;
// age = 31;

// const birthYear = 1992;

// // var job = 'programmer';
// // job = 'teacher';

// lastName = 'Voda';
// console.log(lastName);

//math operators **
// const now = 2037;
// const ageElsa = now - 1991;
// const ageElena = now - 2018;
// console.log(ageElsa, ageElena);

// console.log(ageElsa * 2, ageElena / 10, 2 ** 3);
// // 2** 3 means 2 tp the power of 3 = 2*2*2

// const firstName = 'Elsa';
// const lastName = 'Voda';
// console.log(firstName + ' ' + lastName);

//Assignment operators **
// let x = 10 + 5;  //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x ++; // x = x + 1
// x --; // x = x - 1
// x--; // will decrese it and so on and so far
// console.log(x);

//Comparison operators **
// console.log(ageElsa > ageElena);  // <, >, <=, >=
// console.log(ageElena >= 18);

// const isFullAge = ageElena >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageElsa = now - 1991;
// const ageElena = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;  //x = y = 10, x = 10
// console.log(x,y);

// const averageAge = (ageElsa + ageElena) / 2;
// console.log(ageElsa, ageElena, averageAge);

// const firstName = 'Elsa';
// const job = 'programmer';
// const birthYear = 1995;
// const year = 2037

// const elsa = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(elsa);

// const elsaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(elsaNew);

// console.log(`Just a regular string...`);

// console.log(`String
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license👀");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }
// //if this is true it's gonna log this block(message from console.log), because Sarah here is 19 so her age is grater than 18
// // so if we change the age from 19 to less than 18 , the log is not gonna show up
// //**after we ADDED else ...understood by now

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//    century = 20;
// } else {
//    century = 21;
// }
// console.log(century);

//type conversion **
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Elsa'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; //string '11'
// n = n - 1; //number
// console.log(n);

// truthy and falsy values **
// 5 falsy values : 0, '', undefined, null, NaN

// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("Elsa")); //true , because is a string that is not empty
// console.log(Boolean({})); //true for an empty OBJECT
// console.log(Boolean("")); //false, because is an empty string , because is a falsy value

// const money = 1;
// if (money) {
//   console.log("Don't spend it all🙈");
// } else {
//   console.log("You should get a job!");
// }

// //for EMOJI things pres control+command+space ****

// let height = 0;
// if (height) {
//   console.log("Yaaay, height is DEFINED");
// } else {
//   console.log("Height is UNDEFINED");
// }

// *** EQUALTY OPERATORS ==(loose equality operator, does type coercion) VS ===(strict equality operator , return truth only when the values are exactly the same ) ***

// const age = '18';
// if (age ===18) console.log('You just became an adult(strict)');
// //no need for {} if you have only one line of code so you can use console.log straigh away

// if (age ==18) console.log('You just became an adult(loose)');

// *** prompt and if (){condition} else if () {} else {} ***
// const favourite =Number (prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number");
// }
// else if(favourite ===7){
//     console.log('7 is also a cool number!');
// }
// else if( favourite ===9){
//     console.log('9 is again a cool number');
// }
// else{
//     console.log('Number is not 7 , 9 or 23!');
// }

// if(favourite !== 23)console.log("Why not the 23?");

// ***  Boolean logic : the AND , OR & NOT OPERATORS ***
// logical operators

// const hasDriversLicence = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// // if(hasDriversLicence && hasGoodVision) {
// //     console.log('Sarah is able to drive!');
// // } else{
// //     console.log('Someone else should drive...');
// // }

// const isTired = false; //C
// console.log(hasDriversLicence && hasGoodVision && isTired);

// if (hasDriversLicence && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy!");
// }
// else if(scoreDolphins < scoreKoalas){
//     console.log('Koalas win the trophy!');
// }
// else if(scoreDolphins===scoreKoalas){
//     console.log('Both teams win the trophy');
// }

//bonus 1

// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy!");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy!");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both teams win the trophy");
// }
// else {
//     console.log('Nobody wins the trophy😢');
// }

// *** SWiTCH STATEMENTs ***
// const day = "Friday";

// switch (day) {
//   case "Monday": //day==='Monday'
//     console.log("Plan structure course");
//     console.log("Go to coding meetup");
//     break; //after each block you need to stop it for incoming togheter with this break thing
//   case "Tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log("Write code examples");
//     break;
//   case "Friday":
//     console.log("Record videos");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("not a valid day!");
// }

//    //OR this is the same , up to you

// if (day === "Monday") {
//   console.log("Plan structure course,Go to coding meetup");
// } else if (day === "Tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "Wednesday" || day === "Thursday") {
//   console.log("Write code examples");
// } else if (day === "Friday") {
//   console.log("Record videos");
// } else if (day === "Saturday" || day === "Sunday") {
//   console.log("Enjoy the weekend");
// } else console.log("Not a valid day!");

// *** STATEMENTS AND EXPRESSIONS ***
//***statements are like full sentences that translate actions and expressions produce values*****

// 3 + 4; //expression, which later is gonna produce a value itself
// 1990; //Expression , same
// true && false && !false; //expression, same boolean value

// //statement is not gonna produce a value on itself

// if (23 > 10) {
//   const str = "23 is bigger";
// }
// //what ends with a semicolon ; that is a statement

// const me = 'Elsa';
// console.log(`I am ${2024 - 1990} years old` );

//*** THE CONDITIONAL (TERNARY) OPERATOR for quick decisions*****/

// const age = 20;
// age >= 18;
// //   ? console.log("I like to drink wine 😈")
// //   : console.log("I like to drink water 💦");

//         //Or this much easier ⬇️
// const drink = age >= 18 ? "wine 😈" : "water 💦";
// console.log(drink);
//         //or with if else statement⬇️
// let drink2;
// if (age >= 18) {
//   drink2 = "wine 😈";
// } else {
//   drink2 = "water 💦";
// }
// console.log(drink2);

// console.log(`i like to drink ${age >= 18 ? "wine 😈" : "water 💦"}`);


//*** JAVA RELEASES ES5 ES6+ AND ESNEXT ***
