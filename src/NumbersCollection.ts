// extract logic pertaining to just an array of numbers
// Because we ultimately want to called sort method within this class, let's inherit from Sorter
import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  // data: number[];
  // constructor(data: number[]) {
  //   this.data = data;
  // }

  // same as above
  constructor(public data: number[]) {
    super();
  }

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
