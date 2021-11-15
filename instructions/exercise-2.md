## The `isWritable` function

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`  **Recommended**.

### Todo

- [ ] Type the `isWritable` function

```ts
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
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

