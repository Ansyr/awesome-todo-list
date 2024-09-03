import { useState } from "react";
import { createTodo, Todo } from "../domain/domain.ts";
import { MOCK_TODOS } from "./mock.ts";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(MOCK_TODOS);

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
  };

  const addTodo = (text: string) => {
    const newTodo = createTodo(text);
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  return { todos, toggleTodo, addTodo, deleteTodo };
};
