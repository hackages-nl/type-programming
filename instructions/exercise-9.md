## The `MyReadonly` Type

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`  **Recommended**.

### Todo

- [ ] Create the `MyReadonly` type

```ts
describe("MyReadonly type", () => {
  it("should transform all properties into readonly properties", () => {
    // Given
    const todo: MyReadonly<Todo> = {
      title: "Learn TypeScript",
      description: "Advanced TypeScript for Angular",
      completed: false,
    };

    expectType<{title: string; description: string; completed: boolean}>(todo);
  });
});
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

