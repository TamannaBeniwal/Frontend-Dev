let count = 0;

function increment() {
    count++;
    console.log("Count:", count);
}

function decrement() {
    count--;
    console.log("Count:", count);
}


function simulate() {
    function logCount() {
        console.log("Inside nested function → Count:", count);
    }

    increment();
    logCount();

    decrement();
    logCount();
}


increment();
increment();
decrement();

simulate();
