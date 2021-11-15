import {If} from "../src/if";
import {expectType} from "tsd";

describe("If type", () => {
  it("should return 'a' if the first argument is true", () => {
    type TypeIf = If<true, "a", "b">;
    const val: TypeIf = "a";
    expectType<string>(val);
  });

  it("should return 'Hackages', the second arguement, if the first argument is false", () => {
    type TypeIf = If<false, "Raaw", "Hackages">;
    const val: TypeIf = "Hackages";
    expectType<string>(val);
  });
});
