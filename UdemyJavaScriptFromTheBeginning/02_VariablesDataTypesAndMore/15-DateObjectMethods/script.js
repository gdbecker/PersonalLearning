let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth() + 1; // add 1 because months are 0 based

x = d.getDate(); // get day of the month

x = d.getDay(); // get day of the week, also 0 based with Sunday = 0

x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

// Format dates sensitive to locations
// Calling the format API
x = Intl.DateTimeFormat("en-US").format(d);
x = Intl.DateTimeFormat("en-GB").format(d);
x = Intl.DateTimeFormat("default").format(d);

x = Intl.DateTimeFormat("default", {month: "long"}).format(d); // month name

x = d.toLocaleString("default", {month: "short"}); // 3 letter month name

console.log(x);