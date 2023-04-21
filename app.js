// task 1-----------------------------


// const zakatPercentage = 0.025;
// const userInput = Number(prompt("Please enter your total wealth: "));
// const result = zakatPercentage * userInput;
// alert(`Your zakat value is ${result}`);

// task 2-----------------------------

// const familyMembers = Number(prompt("Enter the total number of family members: "));

// const fitrahMethod = prompt("Choose a fitrah method: \n1. Wheat (Gandum) - Rs 320 per person\n2. Barley (Jau) - Rs 800 per person\n3. Dates (Khajoor) - Rs 2800 per person");

// let fitrahPrice;

// if (fitrahMethod === "1") {
//   fitrahPrice = 320;
// } else if (fitrahMethod === "2") {
//   fitrahPrice = 800;
// } else if (fitrahMethod === "3") {
//   fitrahPrice = 2800;
// } else {
//   alert("Invalid input! Please choose a valid fitrah method.");
// }

// if (fitrahPrice) {
//   const fitrahAmount = familyMembers * fitrahPrice;
//   alert(`Your fitrah amount is Rs${fitrahAmount}`);
// }

// task 3-----------------------------

// const secretNumber = Math.floor(Math.random() * 10) + 1;
// const guess = Number(prompt("Guess the secret number (between 1 and 10): "));

// if (guess === secretNumber) {
//   alert("Congratulations! You guessed the secret number.");
// } else if (guess > secretNumber) {
//   alert("Sorry, your guess is too high. Please guess again.");
// } else {
//   alert("Sorry, your guess is too low. Please guess again.");
// }

// task 4-----------------------------

// let name = prompt("Enter your name: ");
// const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
// alert(`Your name in capitalized case: ${capitalized}`);

// task 5-----------------------------


// const contactNumbers = [];
// const contactNames = [];

// const numContacts = prompt("How many contacts do you want to add?");
// for (let i = 0; i < numContacts; i++) {
//   const number = prompt(`Enter contact number ${i+1}:`);
//   const name = prompt(`Enter contact name ${i+1}:`);
//   contactNumbers.push(number);
//   contactNames.push(name);
// }

// for (let i = 0; i < contactNumbers.length; i++) {
//   console.log(`Contact Name: ${contactNames[i]}, Contact Number: ${contactNumbers[i]}`);
// }

// task 6-----------------------------


// const products = ["cake", "egg", "milk", "butter", "juice"];

// const positionToRemove = prompt(`Enter the position of the item you want to remove (1 - ${products.length}):`);
// const indexToRemove = parseInt(positionToRemove) - 1;

// const removedItem = products.splice(indexToRemove, 1);
// console.log(`Removed item: ${removedItem}`);

// console.log(`Remaining items: ${products}`);
// console.log(`Total number of items remaining: ${products.length}`);

// task 7-----------------------------

// var nationality = prompt("What is your nationality?");
// var gender = prompt("What is your gender?");
// var age = parseInt(prompt("What is your age?"));

// if (nationality === "Pakistani" || nationality === "Indian") {
//   if (gender === "male" && age >= 18) {
//     alert("You are eligible to vote.");
//   } else if (gender === "female" && age >= 18) {
//     var maritalStatus = prompt("Are you married? (yes or no)");
//     if (maritalStatus === "yes") {
//       alert("You are eligible to vote.");
//     } else {
//       alert("You are not eligible to vote.");
//     }
//   } else {
//     alert("You are not eligible to vote.");
//   }
// } else {
//   alert("You are not eligible to vote.");
// }

// task 8-----------------------------

// const WorldCupSquad = ['Babar Azam', 'Mohammad Rizwan', 'Fakhar Zaman', 'Imam-ul-Haq', 'Shoaib Malik', 'Asif Ali', 'Shadab Khan', 'Imad Wasim', 'Faheem Ashraf', 'Hasan Ali', 'Shaheen Afridi', 'Haris Rauf', 'Mohammad Hasnain', 'Usman Qadir', 'Sarfaraz Ahmed'];

// const finalTeam = WorldCupSquad.slice();

// for (let i = 0; i < 4; i++) {
//   const index = Math.floor(Math.random() * finalTeam.length);
//   finalTeam.splice(index, 1);
// }

// console.log('Final Team:');
// console.log(finalTeam);


