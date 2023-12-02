// Date is a built-in JavaScript object

let d;
d = new Date();
console.log(d, typeof d);

d = d.toString();

d = new Date(2021, 6, 10); // month is 0 based, starts at 0

d = new Date(2021, 0, 10, 30, 0);

d = new Date("2021/07/10");
d = new Date("2021-07-10T12:30:00");
d = new Date("2021/07/10 12:30:00");
d = new Date("2022-07-10"); // this format might be off one day
d = new Date("07-10-2022");

d = Date.now(); // returns milliseconds exact timestamp

d = new Date("07-10-2022 12:30:00");
d = d.getTime(); // returns milliseconds exact timestamp
d = d.valueOf(); // same thing as above

d = new Date(1657470600000); // pass in milliseconds

d = Math.floor(Date.now() / 1000); // timestamp in seconds

console.log(d);