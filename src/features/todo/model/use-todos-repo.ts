import {
  addTodo,
  deleteTodoById,
  getTodos,
  updateTodoById,
  UpdateTodoDto,
} from "../../../shared/api/todos";
import { generateUid } from "../../../shared/lib/uuid.ts";

export const useTodosRepo = () => {
  const getTodosList = async () => {
    try {
      const todos = await getTodos().then((res) =>
        res.map((todo) => ({
          id: todo.id,
          completed: todo.completed,
          createdAt: todo.createdAt,
          text: todo.text,
        })),
      );
      return todos;
    } catch (error) {
      console.error("Failed to fetch todos:", error);
      return [];
    }
  };

  const createTodo = async (text: string) => {
    const todo = {
      id: generateUid(),
      text,
      createdAt: new Date().toISOString(),
      completed: false,
    };
    await addTodo(todo);
  };

  const updateTodo = async (id: string, params: UpdateTodoDto) => {
    await updateTodoById(id, params);
  };

  const deleteTodo = async (id: string) => {
    await deleteTodoById(id);
  };

  return {
    createTodo,
    getTodosList,
    deleteTodo,
    updateTodo,
  };
};
