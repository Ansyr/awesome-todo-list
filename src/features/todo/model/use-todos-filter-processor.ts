import { useState } from "react";

import { TodoProcessor } from "./use-todos.ts";
import { FilterTodo } from "../ui/todo-list-filter.tsx";

export const useTodosFilterProcessor = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterTodo>("all");
  const filterProcessor: TodoProcessor = (todos) => {
    if (selectedFilter === "all") {
      return todos;
    } else if (selectedFilter === "unсompleted") {
      return todos.filter((todo) => !todo.completed);
    } else if (selectedFilter === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    return [];
  };

  const changeFilter = (filter: FilterTodo) => {
    setSelectedFilter(filter);
  };

  return {
    processor: filterProcessor,
    changeFilter,
    filter: selectedFilter,
  };
};
