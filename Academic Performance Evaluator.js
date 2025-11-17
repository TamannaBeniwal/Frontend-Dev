let marks = [85, 70, 90, 60, 75]; // 5 subjects

let anyFail = marks.some(m => m < 35);
let total = marks.reduce((a, b) => a + b, 0);
let percentage = (total / (marks.length * 100)) * 100;

console.log("Percentage:", percentage.toFixed(2) + "%");

if (anyFail) {
    console.log("Detained (Failed in one or more subjects)");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}
