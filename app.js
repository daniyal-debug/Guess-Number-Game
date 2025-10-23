// Guess Number Game

let correctNum = 69;

let userNum = prompt("Enter Number 1 to 100")
let correctMessage = "Correct Guess"
let message1 = "No! Try Somthing Different"


if (correctNum == userNum) {
    console.log("message")
} else if (userNum == correctNum - 1 || userNum == correctNum + 1) {
    console.log("Soo Close")
} else if (userNum == correctNum - 2 || userNum == correctNum + 2) {
    console.log("No! Try Somthing Different")
} else if (userNum == correctNum - 3 || userNum == correctNum + 3) {
    console.log("bohat low guess hai")
}
else {
    console.log("Try Again")
}
// document.getElementById("output").textContent = correctMessage;
document.getElementById("output1").textContent = message1;
