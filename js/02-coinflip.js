let coinFlip = Math.floor(Math.random() * 2);
let choice = window.prompt("Choose heads or tails:").toLowerCase();

if (coinFlip < 50 && choice === "heads") {
  alert("The flip was heads and you chose heads...you win!");
} else if (coinFlip >= 50 && choice === "tails") {
  alert("The flip was tails and you chose tails...you win!");
} else if (coinFlip < 50 && choice === "tails") {
  alert("The flip was heads but you chose tails...you lose!");
} else if (coinFlip >= 50 && choice === "heads") {
  alert("The flip was tails but you chose heads...you lose!");
}
