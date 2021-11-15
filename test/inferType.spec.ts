import {InferType} from "../src/inferType";
import {expectType} from "tsd";

describe("Infer type of T in Promise<T>", () => {
  it("should infer the type of T in Promise<T>", () => {
    type Bool = Promise<boolean>;
    type ResultBool = InferType<Bool>;
    const result1: ResultBool = true;
    expectType<boolean>(result1);
    expect(result1).toEqual(true);
  });

  it("should work with Object type as well", () => {
    type Obj = Promise<{company: string}>;
    type ResultY = InferType<Obj>;
    const resultY: ResultY = {company: "Hackages"};
    expectType<{company: string}>(resultY);
    expect(resultY.company).toEqual("Hackages");
  });
});
