import {MyOptional} from "../src/myoptional";
import {expectType} from "tsd";

type Todo = {
  title: string;
  completed: boolean;
  description: string;
};

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
