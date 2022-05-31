"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const NumbersCollection_1 = require("./NumbersCollection");
const LinkedList_1 = require("./LinkedList");
const sortNumbers = () => {
    const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
    numbersCollection.sort();
    console.log(numbersCollection.data);
};
sortNumbers();
const sortCharacters = () => {
    const charactersCollection = new CharactersCollection_1.CharactersCollection("Xaayb");
    charactersCollection.sort();
    console.log(charactersCollection.data);
};
sortCharacters();
const sortLinkedList = () => {
    const linkedList = new LinkedList_1.LinkedList();
    linkedList.add(500);
    linkedList.add(-10);
    linkedList.add(-3);
    linkedList.add(4);
    linkedList.sort();
    linkedList.print();
};
sortLinkedList();
