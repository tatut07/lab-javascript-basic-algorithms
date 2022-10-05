console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "Jane Doe";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "John Doe";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
let hacker1Capitals = "";
for (let hack1 = 0; hack1 < hacker1.length; hack1++) {
  hacker1Capitals += hacker1[hack1].toUpperCase() + " ";
}
console.log(hacker1Capitals);
let hacker2reversed = "";
for (let hack2 = hacker2.length - 1; hack2 >= 0; hack2--) {
  hacker2reversed += hacker2[hack2];
}
console.log(hacker2reversed);
if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
