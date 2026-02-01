let num1 = Number(window.prompt("Enter the first number:"));
let num2 = Number(window.prompt("Enter the second number:"));

if (num1 > num2) {
  document.write("The first number is larger: " + num1);
} else if (num1 < num2) {
  document.write("The second number is larger: " + num2);
} else if (num1 === num2) {
  document.write("Both numbers are equal.");
} else {
  document.write("Please enter valid numbers!");
}
