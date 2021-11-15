## The `InferType` Type

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`  **Recommended**.

### Todo

- [ ] Create the `InferType` type

```ts
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
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

