/*// Ask user to input comma-separated strings
let input = prompt("Enter a list of items, separated by commas:");
// Use const to avoid var
const args = process.argv.slice(2); // Skip first 2 default Node arguments

// Check the number of arguments and print the appropriate message
if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a list of strings separated by commas: ", function (answer) {
  const array = answer.split(",").map(item => item.trim());
  let num = array.length;
console.log("Array of strings:", array);
{

  if (num === 0) {
  console.log("No argument");
} else if (num === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}}
  rl.close();
});
// Check the number of arguments and print the appropriate message
/*if (num === 0) {
  console.log("No argument");
} else if (num === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
*/
