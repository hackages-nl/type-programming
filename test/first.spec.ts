import {First} from "../src/first";
import {expectType} from "tsd";

describe("First type", () => {
  it("should return the type of the first element of an array of string", () => {
    type names = ["Davy", "Xavier", "Martine"];
    const val: First<names> = "Davy";
    expectType<string>(val);
  });

  it("should return the type of the first element of the array of number", () => {
    type arr = [3, 2, 1];
    const val: First<arr> = 3;
    expectType<number>(val);
  });
});
