// extract logic pertaining to just an array of numbers
export class NumbersCollection {
  // data: number[];
  // constructor(data: number[]) {
  //   this.data = data;
  // }

  // same as above
  constructor(public data: number[]) {}

  // get keyword allows use to just call collection.length (rather than collection.length()
  get length(): number {
    return this.data.length;
  }

  // decide whether we need to swap the 2 elements in a pair
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  // actually do the swap
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
