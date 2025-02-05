let array = [3, 7, 1, 9, 5];
let totalSum = 0;
let maxNumber = array[0];
let minNumber = array[0];

for (let i = 0; i < array.length; i++) {
  totalSum += array[i]; 
  if (array[i] > maxNumber) {
    maxNumber = array[i]; 
  }
  if (array[i] < minNumber) {
    minNumber = array[i]; 
  }
}

let choice = prompt("Ma isku daraa (sum), mise Max Number-ka (max), mise Min Number-ka (min)? (doorasho: sum, max, min):");

if (choice === "sum") {
  console.log("Total Sum:", totalSum);
} else if (choice === "max") {
  console.log("Maximum Number:", maxNumber);
} else if (choice === "min") {
  console.log("Minimum Number:", minNumber);
} else {
  console.log("Doorasho sax ah maadan gelin!");
}
