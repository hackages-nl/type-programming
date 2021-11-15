## The `Length` Type

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`  **Recommended**.

### Todo

- [ ] Create the `Length` type

```ts
describe("Length type", () => {
  it("should return the length of a typed array", () => {
    type names = ["Davy", "Xavier", "Martine"];
    const size: Length<names> = 3;
    expectType<number>(size);
    expect(size).toEqual(3);
  });
});
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

