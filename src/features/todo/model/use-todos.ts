import { useEffect, useState } from "react";
import { useTodosRepo } from "./use-todos-repo.ts";
import { Todo } from "./domain.ts";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { getTodosList, createTodo, deleteTodo, updateTodo } = useTodosRepo();

  const handleAddTodo = async (text: string) => {
    await createTodo(text);
    const updatedTodos = await getTodosList();
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id);
    const updatedTodos = await getTodosList();
    setTodos(updatedTodos);
  };

  const handleToggleTodo = async (id: string) => {
    const updatedTodo = todos.find((todo) => todo.id === id);

    if (updatedTodo) {
      await updateTodo(id, {
        completed: !updatedTodo.completed,
        text: updatedTodo?.text,
      });
      const updatedTodos = await getTodosList();
      setTodos(updatedTodos);
    }
  };

  useEffect(() => {
    getTodosList().then((todos) => setTodos(todos));
  }, []);

  return { todos, handleAddTodo, handleDeleteTodo, handleToggleTodo };
};
