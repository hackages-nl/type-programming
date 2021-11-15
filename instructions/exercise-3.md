## The `If` Type

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`  **Recommended**.

### Todo

- [ ] Create the `If` type

```ts
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
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

