import { SortTodo, Todo } from "./domain.ts";
import { useMemo } from "react";

export const useSortedTodos = ({
  todos,
  sortBy,
}: {
  todos: Todo[];
  sortBy: SortTodo;
}) => {
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
  return { sortedTodos };
};
