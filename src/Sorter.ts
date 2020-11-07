// Define an interface that gives instructions on what you need to have to be eligible for sorting
// (not just for Numbers Collection)
interface Sortable {
  length: number;
  // note leftIndex and rightIndex names don't have to match with say what we use in NumbersCollection
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  // tell Typescript that these methods don't exist in this class, but DEFINITELY will exist in child classes
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
