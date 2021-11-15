import {Push} from "../src/push";
import {expectType} from "tsd";

describe("Push type", () => {
  it("should add on element at the end of the array", () => {
    type Names = ["Davy", "Xavier", "Martine"];
    const names: Push<Names, "Daan"> = ["Davy", "Xavier", "Martine", "Daan"];
    expectType<string[]>(names);
    expect(names.length).toEqual(4);
  });
});
