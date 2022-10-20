// For loop
function FizzBuzz() {
    for (let index = 1; index < 101; index++) {
        if (index % 5 === 0 && index % 3 === 0) {
            console.log("FizzBuzz");
        } else if (index % 5 === 0) {
            console.log("Buzz");
        } else if (index % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(index);
        }
    }
}

// For loop with array output
var output = []
function FizzBuzz2() {
    for (let index = 1; index < 101; index++) {
        if (index % 5 === 0 && index % 3 === 0) {
            output.push("FizzBuzz");
        } else if (index % 5 === 0) {
            output.push("Buzz");
        } else if (index % 3 === 0) {
            output.push("Fizz");
        } else {
            output.push(index);
        }
    }

    return output
}

// While loop with array output
var output = []
count = 1
function FizzBuzz3() {
    while (count <= 100) {
        if (count % 5 === 0 && count % 3 === 0) {
            output.push("FizzBuzz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else {
            output.push(count);
        }

        count++;
    }

    return output
}

FizzBuzz3()
