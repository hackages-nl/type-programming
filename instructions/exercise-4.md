## The `First` Type

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`  **Recommended**.

### Todo

- [ ] Create the `First` type

```ts
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
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

