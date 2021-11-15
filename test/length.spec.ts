import {Length} from "../src/length";
import {expectType} from "tsd";

describe("Length type", () => {
  it("should return the length of a typed array", () => {
    type names = ["Davy", "Xavier", "Martine"];
    const size: Length<names> = 3;
    expectType<number>(size);
    expect(size).toEqual(3);
  });
});
