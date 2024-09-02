import { FilterTodo, Todo } from "../domain/domain.ts";
import { useMemo, useState } from "react";

export const useFilteredTodos = (todos: Todo[]) => {
  const [selectedFilter, setSelectFilter] = useState<FilterTodo>("all");

  const changeFilter = (filter: FilterTodo) => {
    setSelectFilter(filter);
  };

  const filteredTodos = useMemo(() => {
    if (selectedFilter === "all") {
      return todos;
    } else if (selectedFilter === "unсompleted") {
      return [...todos].filter((todo) => !todo.completed);
    } else if (selectedFilter === "completed") {
      return [...todos].filter((todo) => todo.completed);
    }
  }, [todos, selectedFilter]);

  return { filteredTodos, selectedFilter, changeFilter };
};
