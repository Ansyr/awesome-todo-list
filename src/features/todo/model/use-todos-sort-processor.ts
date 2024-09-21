import { useState } from "react";
import { SortTodo } from "./domain.ts";
import { TodoProcessor } from "./use-todos.ts";

export const useTodosSortProcessor = () => {
  const [sortBy, setSortBy] = useState<SortTodo>("date");

  const sortProcessor: TodoProcessor = (todos) => {
    if (sortBy === "alphabet") {
      return [...todos!].sort((a, b) => a.text.localeCompare(b.text));
    } else {
      return [...todos!].sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }
  };

  const changeSort = (sort: SortTodo) => {
    setSortBy(sort);
  };

  return {
    processor: sortProcessor,
    changeSort,
    sort: sortBy,
  };
};
