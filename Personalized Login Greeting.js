// Q1 – Personalized Login Greeting

let userName = "Tamanna";
let hour = new Date().getHours();

let greeting = "12";

if (hour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (hour >= 12 && hour < 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
