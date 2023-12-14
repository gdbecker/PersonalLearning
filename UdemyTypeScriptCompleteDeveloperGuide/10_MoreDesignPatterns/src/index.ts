import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// test with NumbersCollection
const numbersCollection = new NumbersCollection([10, 2, 0, -5]);
numbersCollection.sort();
console.log("\nUsing Sorter on a NumbersCollection");
console.log(numbersCollection.data);

// test with CharactersCollection
const charactersCollection = new CharactersCollection("XeyuB");
charactersCollection.sort();
console.log("\nUsing Sorter on a CharactersCollection");
console.log(charactersCollection.data);

// test with LinkedList
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(300);
linkedList.add(-4);
linkedList.add(0);

console.log("\nUsing Sorter on a LinkedList");
linkedList.sort();
linkedList.print();
