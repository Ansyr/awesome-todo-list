import { FilterTodo, Todo } from "../domain/domain.ts";
import { useMemo, useState } from "react";

export const useFilteredTodos = (todos: Todo[]) => {
  const [selectedFilter, setSelectFilter] = useState<FilterTodo>("all");
  const [searchedText, setSearchedText] = useState("");

  const changeFilter = (filter: FilterTodo) => {
    setSelectFilter(filter);
  };

  const changeSearchedText = (text: string) => {
    setSearchedText(text);
  };

  const searchedTodos = useMemo(
    () =>
      todos.filter((todo) => todo.text.toLowerCase().includes(searchedText)),
    [todos, searchedText],
  );

  const filteredTodos = useMemo(() => {
    if (selectedFilter === "all") {
      return searchedTodos;
    } else if (selectedFilter === "unсompleted") {
      return [...searchedTodos].filter((todo) => !todo.completed);
    } else if (selectedFilter === "completed") {
      return [...searchedTodos].filter((todo) => todo.completed);
    }
  }, [searchedTodos, selectedFilter]);

  return {
    filteredTodos,
    selectedFilter,
    changeFilter,
    searchedText,
    changeSearchedText,
  };
};
