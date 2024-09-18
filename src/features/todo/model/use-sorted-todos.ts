import { SortTodo, Todo } from "./domain.ts";
import { useMemo, useState } from "react";

export const useSortedTodos = ({ todos }: { todos: Todo[] }) => {
  const [sortBy, setSortBy] = useState<SortTodo>("date");
  const sortedTodos = useMemo(() => {
    if (sortBy === "alphabet") {
      return [...todos!].sort((a, b) => a.text.localeCompare(b.text));
    } else {
      return [...todos!].sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }
  }, [todos, sortBy]);

  const changeSort = (sort: SortTodo) => {
    setSortBy(sort);
  };
  return { sortedTodos, sortBy, changeSort };
};
