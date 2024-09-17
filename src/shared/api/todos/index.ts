import { api } from "../api-instance.ts";

export type TodoDto = {
  id: string;
  text: string;
  createdAt: string;
  completed: boolean;
};

export type AddTodoDto = {
  id: string;
  text: string;
  createdAt: string;
  completed: boolean;
};

export type UpdateTodoDto = {
  text: string;
  completed: boolean;
};

export const getTodos = () =>
  api.get<TodoDto[]>("todos").then((res) => res.data);

export const addTodo = (newTodo: AddTodoDto) => {
  return api.post<TodoDto>("todos", newTodo);
};

export const updateTodoById = (id: string, updatedTodo: UpdateTodoDto) => {
  return api.patch<TodoDto>(`todos/${id}`, updatedTodo);
};
export const deleteTodoById = (id: string) => {
  return api.delete(`todos/${id}`);
};
