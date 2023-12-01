// Logging to the console
// "console" = object, and "log" = method
// "Hello, World!" = argument for the log method
console.log("Hello, World!");

// Pass in numbers, Strings, booleans
console.log(100);
console.log(20, "Hello", true);

// Declare a variable, and console.log
const x = 100;
console.log(x);

// Show alerts/errors in the console
console.error("Alert");

// Show warnings
console.warn("Warning");

// Show a table
console.table({ name: "Garrett", email: "garrett@email.com"});

// Show a grouping of console logs
console.group("simple");
console.error("Alert");
console.log(x);
console.groupEnd();

// Apply CSS to console logs
const styles = "padding: 10px; background-color: yellow; color: green";
console.log("%cHello, World!", styles);