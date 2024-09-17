import {
  addTodo,
  deleteTodoById,
  getTodos,
  TodoDto,
  updateTodoById,
  UpdateTodoDto,
} from "../../../shared/api/todos";
import { Todo } from "./domain.ts";

export const useTodosRepo = () => {
  const getTodosList = async (): Promise<Todo[]> => {
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

  const createTodo = async (todo: Todo) => {
    try {
      const dto: TodoDto = {
        id: todo.id,
        completed: todo.completed,
        createdAt: todo.createdAt,
        text: todo.text,
      };
      await addTodo(dto);
    } catch (error) {
      console.error("Failed to create todo:", error);
    }
  };

  const updateTodo = async (id: string, todo: Todo) => {
    try {
      const dto: UpdateTodoDto = {
        completed: !todo.completed,
        text: todo.text,
      };
      await updateTodoById(id, dto);
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await deleteTodoById(id);
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return {
    createTodo,
    getTodosList,
    deleteTodo,
    updateTodo,
  };
};
