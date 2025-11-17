
let expenses = [1200, 800, 5000, 1500, 600]; 

let total = expenses.reduce((sum, val) => sum + val, 0);
let average = total / expenses.length;
let totalWithTax = total;
totalWithTax += totalWithTax * 0.10;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("After Tax:", totalWithTax.toFixed(2));
