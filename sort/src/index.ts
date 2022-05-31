import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

const sortNumbers = () => {
    const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
    numbersCollection.sort();
    console.log(numbersCollection.data);
};
sortNumbers();

const sortCharacters = () => {
    const charactersCollection = new CharactersCollection("Xaayb");
    charactersCollection.sort();
    console.log(charactersCollection.data);
};
sortCharacters();

const sortLinkedList = () => {
    const linkedList = new LinkedList();
    linkedList.add(500);
    linkedList.add(-10);
    linkedList.add(-3);
    linkedList.add(4);
    linkedList.sort();
    linkedList.print();
};
sortLinkedList();
