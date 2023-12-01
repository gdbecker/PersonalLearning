// currently a String
let amount = "100";
console.log(amount, typeof amount);

// convert String to a Number, 3 ways
// amount = parseInt(amount);
amount = +amount;
// amount = Number(amount);
console.log(amount, typeof amount);

// convert Number to String, 2 ways
let b = 50;
// b = b.toString();
b = String(b);
console.log(b, typeof b);

// convert a String to float
let c = "98.5";
c = parseFloat(c);
console.log(c, typeof c);

// convert Number to Boolean
let d = 1;
d = Boolean(d);
console.log(d, typeof d);
d = 0;
d = Boolean(d);
console.log(d, typeof d);