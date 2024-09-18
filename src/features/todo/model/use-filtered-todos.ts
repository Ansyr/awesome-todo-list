import { FilterTodo, Todo } from "./domain.ts";
import { useMemo, useState } from "react";

export const useFilteredTodos = (todos: Todo[]) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterTodo>("all");
  const [searchedText, setSearchedText] = useState("");

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

  const changeFilter = (filter: FilterTodo) => {
    setSelectedFilter(filter);
  };

  const changeSearchText = (text: string) => {
    setSearchedText(text);
  };

  return {
    filteredTodos,
    changeFilter,
    changeSearchText,
    selectedFilter,
    searchedText,
  };
};
