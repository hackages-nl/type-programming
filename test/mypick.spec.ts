import {MyPick} from "../src/mypick";
import {expectType} from "tsd";

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

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
