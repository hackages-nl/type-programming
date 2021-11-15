## The `MyPick` Type

### Before starting: 
    - Install all dependencies with `npm install`
    - Run your tests in the terminal with `npm t` or `yarn test`
    - Optionally, you can run the tests in watch mode with `npm t -- --watch` or `yarn test --watch`  **Recommended**.

### Todo

- [ ] Create the `MyPick` type

```ts
describe("MyPick type", () => {
  it("should ", () => {
    type TodoPreview = MyPick<Todo, "title" | "completed">;

    const todo: TodoPreview = {
      title: "Clean room",
      completed: false,
    };

    expectType<{title: string; completed: boolean}>(todo);
    expect("description" in todo).toBe(false);
  });
});
```

### Important note:
You cannot modify the tests suites. If you find an issue, please, let us know via email (007@hackages.io) or via the platform. 

