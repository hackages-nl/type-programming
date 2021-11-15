import {pluck} from "../src/pluck";

describe("pluck function", () => {
  it("should be defined", () => {
    expect(pluck).toBeDefined();
  });

  it("should take 2 arguments and return an array of strings", () => {
    expect(pluck.length).toBe(2);
  });

  it("should return an array of strings", () => {
    // Given
    let actual;
    let expected = ["davy", 2016];

    // When
    actual = pluck({name: "davy", company: "hackages", founded: 2016}, [
      "name",
      "founded",
    ]);

    // Then
    expect(Array.isArray(actual)).toBeTruthy();
    expect(actual).toEqual(expected);
  });
});
