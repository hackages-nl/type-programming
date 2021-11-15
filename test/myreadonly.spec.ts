import {MyReadonly} from "../src/myreadonly";
import {expectType} from "tsd";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

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
