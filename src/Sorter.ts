// Define an interface that gives instructions on what you need to have to be eligible for sorting
// (not just for Numbers Collection)
interface Sortable {
  length: number;
  // note leftIndex and rightIndex names don't have to match with say what we use in NumbersCollection
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

// extract out the sorting logic and don't have it working directly with solely an array of numbers
export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
