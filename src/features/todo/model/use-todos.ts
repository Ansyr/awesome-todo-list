import { useEffect, useState } from "react";
import { useTodosRepo } from "./use-todos-repo.ts";
import { Todo } from "./domain.ts";
import { generateUid } from "../../../shared/lib/uuid.ts";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { getTodosList, createTodo, deleteTodo, updateTodo } = useTodosRepo();

  const add = async (text: string) => {
    if (text.length) {
      const todo = {
        id: generateUid(),
        text,
        createdAt: new Date().toISOString(),
        completed: false,
      };
      await createTodo(todo);
      const updatedTodos = await getTodosList();
      setTodos(updatedTodos);
    }
  };

  const remove = async (id: string) => {
    await deleteTodo(id);
    const updatedTodos = await getTodosList();
    setTodos(updatedTodos);
  };

  const toggle = async (id: string) => {
    const updatedTodo = todos.find((todo) => todo.id === id);

    if (updatedTodo) {
      await updateTodo(id, updatedTodo);
      const updatedTodos = await getTodosList();
      setTodos(updatedTodos);
    }
  };

  useEffect(() => {
    getTodosList().then((todos) => setTodos(todos));
  }, []);

  return { todos, add, remove, toggle };
};
