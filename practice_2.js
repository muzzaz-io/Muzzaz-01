function calculateTotal(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(calculateTotal(10,20,30,40)); 

function getStatus(total, target = 100) {
  if (total >= target) {
    console.log("Target Reached");
  } else {
    console.log("Target Not Reached");
  }
  return getStatus;
}
const total = calculateTotal(10,20,30,40);
console.log(getStatus(total));