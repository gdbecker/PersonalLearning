"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// test with NumbersCollection
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 2, 0, -5]);
numbersCollection.sort();
console.log("\nUsing Sorter on a NumbersCollection");
console.log(numbersCollection.data);
// test with CharactersCollection
const charactersCollection = new CharactersCollection_1.CharactersCollection("XeyuB");
charactersCollection.sort();
console.log("\nUsing Sorter on a CharactersCollection");
console.log(charactersCollection.data);
// test with LinkedList
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(300);
linkedList.add(-4);
linkedList.add(0);
console.log("\nUsing Sorter on a LinkedList");
linkedList.sort();
linkedList.print();
