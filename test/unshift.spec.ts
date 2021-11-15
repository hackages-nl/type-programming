import {Unshift} from "../src/unshift";
import {expectType} from "tsd";

describe("Unshift type", () => {
  it("should add on element at the start of the array", () => {
    type Names = ["Davy", "Xavier", "Martine"];
    const names: Unshift<Names, "Daan"> = ["Daan", "Davy", "Xavier", "Martine"];
    expectType<string[]>(names);
    expect(names.length).toEqual(4);
  });
});
