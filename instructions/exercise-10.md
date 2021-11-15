## The `MyOptional` Type

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`  **Recommended**.

### Todo

- [ ] Create the `MyOptional` type

```ts
describe("MyOptional type", () => {
  it("should transform the properties into optional props", () => {
    type TodoOptional = MyOptional<Todo, "title" | "completed">;
    const todoOptional: TodoOptional = {
      title: "Learn you some TypeScript",
      completed: true,
    };

    expectType<{title?: string; completed?: boolean}>(todoOptional);
    expect("description" in todoOptional).toBeFalsy();
  });
});
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

