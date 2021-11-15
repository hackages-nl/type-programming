## The `pluck` function

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`  **Recommended**.

### Todo

- [ ] Type the `pluck` function

```ts
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
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

