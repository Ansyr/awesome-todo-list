import { useState } from "react";
import { Todo } from "../domain/domain.ts";
import { MOCK_TODOS } from "./mock.ts";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(MOCK_TODOS);

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
  };

  return { todos, toggleTodo };
};
