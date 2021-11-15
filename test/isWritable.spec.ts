import {isWritable} from "../src/isWritable";

describe("isWritable function", () => {
  it("should return true if a property is writable", () => {
    const user = {name: "Xavier"};
    const expected = isWritable(user, "name");
    expect(expected).toBe(true);
  });

  it("should return false if a property is not writable", () => {
    const user = {name: "Xavier"};
    const expected = isWritable(Object.freeze(user), "name");
    expect(expected).toBe(false);
  });
});
