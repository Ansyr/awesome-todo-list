import {
  addTodo,
  deleteTodoById,
  getTodos,
  TodoDto,
  updateTodoById,
  UpdateTodoDto,
} from "../../../shared/api/todos";

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

  const createTodo = async (todo: TodoDto) => {
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
