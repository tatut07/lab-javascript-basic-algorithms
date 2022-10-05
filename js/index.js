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
const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor nibh vitae mattis gravida. Vestibulum cursus iaculis tortor vel ultricies. Cras in orci lobortis, molestie tellus quis, laoreet ex. Fusce pulvinar commodo nibh. Nullam sed odio dui. Nullam maximus pretium nisl, nec pulvinar turpis consequat eget. Pellentesque aliquet lectus faucibus felis viverra gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce consequat rhoncus diam. Sed faucibus purus vitae ornare pretium. Fusce et ipsum molestie, rhoncus est ut, commodo ante. Donec nec ligula erat.\n
Sed feugiat posuere sem at mattis. Suspendisse massa risus, bibendum ut euismod eget, tempor eu nisi. Praesent lobortis quam sit amet vehicula vestibulum. Maecenas nec ipsum magna. Fusce fringilla neque eget iaculis efficitur. Mauris commodo lacus quis enim vehicula feugiat. Cras lobortis nulla quam, nec tincidunt quam commodo quis. Nullam eget lorem ut velit vestibulum faucibus et a nibh. Maecenas purus ipsum, cursus vel ante et, facilisis fermentum nibh. Nulla quis rhoncus leo. Donec et arcu elementum, ornare odio id, lacinia nibh. Ut mollis ornare dui at euismod. Nulla risus lorem, porta et dictum vel, molestie vel erat. Quisque faucibus hendrerit nunc, id pretium quam sollicitudin in. Quisque auctor lorem non est vehicula elementum.\n
Proin lacinia diam et tempor aliquam. Nam auctor sem eget erat vestibulum porta. Aliquam risus urna, convallis et finibus id, hendrerit a ante. Donec viverra tempus ligula, non faucibus nibh. Aenean finibus, lacus eget feugiat luctus, enim purus sollicitudin odio, vitae ultrices elit tortor eget eros. Ut eu libero pretium nisl gravida laoreet et sed felis. Duis vitae orci eget dui molestie lacinia non nec lacus. Proin ullamcorper, quam vel tincidunt dignissim, nunc est maximus lectus, a blandit tortor quam non ligula. Sed vel quam et turpis malesuada vestibulum. Nullam ultrices dui vel ornare sollicitudin. Proin semper feugiat mauris, nec facilisis arcu aliquam sit amet. Vivamus in aliquam metus. Curabitur venenatis sem id justo lacinia lacinia. Pellentesque porttitor tincidunt lorem vitae tristique. Suspendisse magna risus, ultricies id enim a, rutrum vehicula nunc. Curabitur sit amet lectus at lorem convallis mollis a a tellus.`;
console.log(paragraph);

let wordCount = 0;
let etCount = 0;
let splitParagraph = paragraph.split(" ");
for (let i = 0; i < splitParagraph.length; i++) {
  if (splitParagraph[i].includes("\n")) {
    wordCount++;
  } else if (splitParagraph[i] === "et" || splitParagraph[i] === "et.") {
    etCount++;
  }
  wordCount++;
}
console.log(wordCount);
console.log(etCount);

let phraseToCheck = "race car";
let wordReversed = "";
for (let i = phraseToCheck - 1; i >= 0; i--) {
  const reversed = wordReversed[i];
  wordReversed += reversed;
}
console.log(wordReversed);
