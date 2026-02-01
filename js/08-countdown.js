let number = window.prompt("Enter a number to start the countdown:");
number = parseInt(number);

for (let i = number; i >= 0; i--) {
  console.log(i);
}
