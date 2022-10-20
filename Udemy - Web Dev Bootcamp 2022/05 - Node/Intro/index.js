// Navigate to the folder containing the file
// type "node" before the file name and watch it run in the terminal!
// console.log("Hello world!");

// Practice using local file system and copying a file
// const fs = require("fs");
// fs.copyFileSync("file1.txt", "file2.txt");

// Using npm
// run "npm init" in the terminal and connect to the desired .js file
// install npm packages and use! examples

var superheroes = require("superheroes");
var mySuperHero = superheroes.random();
console.log(mySuperHero);

var supervillains = require("supervillains");
var mySuperVillain = supervillains.random();
console.log(mySuperVillain);
