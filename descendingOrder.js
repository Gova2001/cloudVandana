const inputString = prompt("Enter numbers separated by commas:");
const inputArray = inputString.split(',').map(Number);
if (!inputArray.some(isNaN)) {
  inputArray.sort(function(a, b) {
    return b - a;
  });
  console.log("Sorted Array in Descending Order:", inputArray);
} else {
  console.log("Invalid input. Please enter numbers separated by commas.");
}