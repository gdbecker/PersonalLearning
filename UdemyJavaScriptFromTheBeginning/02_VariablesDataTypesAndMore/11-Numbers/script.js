let x;
const num = new Number(5);

// Various Number methods
x = num.toString();

x = num.toString().length;

x = num.toFixed(2); // 2 decimal points after period

x = num.toPrecision(2); // 2 digits total

x = num.toExponential(2);

x = num.toLocaleString("en-US");
x = num.toLocaleString("ar-EG");

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x, typeof x);