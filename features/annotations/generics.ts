
export class ArrayOfNumbers {
    constructor(public collection: number[]) { }

    get(index: number): number {
        return this.collection[index];
    }
}

export class ArrayOStrings {
    constructor(public collection: string[]) { }

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) { }

    get(index: number): T {
        return this.collection[index];
    }
}

const arr = new ArrayOfAnything(["inferred", "type"])
arr.get(1);

function printGenerics<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    };
};
printGenerics(["inferred", "type"]);

//Generic constraints
class Car {
    print(){
        console.log("I am a car");
    }
}

class House {
    print(){
        console.log("I am a house");
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        arr[i].print();
    };
}

printHousesOrCars<House>([new House(), new House()]);