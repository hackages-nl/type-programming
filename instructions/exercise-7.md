## The `Unshift` Type

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`  **Recommended**.

### Todo

- [ ] Create the `Unshift` type

```ts
describe("Unshift type", () => {
  it("should add on element at the start of the array", () => {
    type Names = ["Davy", "Xavier", "Martine"];
    const names: Unshift<Names, "Daan"> = ["Daan", "Davy", "Xavier", "Martine"];
    expectType<string[]>(names);
    expect(names.length).toEqual(4);
  });
});
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

