import { FilterTodo, SortTodo, Todo } from "./domain.ts";
import { useMemo } from "react";

export const useFilteredTodos = ({
  todos,
  selectedFilter,
  searchedText,
}: {
  todos: Todo[];
  sortBy: SortTodo;
  selectedFilter: FilterTodo;
  searchedText: string;
}) => {
  const searchedTodos = useMemo(
    () =>
      todos.filter((todo) => todo.text.toLowerCase().includes(searchedText)),
    [todos, searchedText],
  );

  const filteredTodos = useMemo(() => {
    if (selectedFilter === "all") {
      return searchedTodos;
    } else if (selectedFilter === "unсompleted") {
      return searchedTodos.filter((todo) => !todo.completed);
    } else if (selectedFilter === "completed") {
      return searchedTodos.filter((todo) => todo.completed);
    }
  }, [searchedTodos, selectedFilter]);

  return { filteredTodos };
};
