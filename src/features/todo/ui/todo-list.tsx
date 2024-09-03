import { Checkbox } from "@/shared/ui/checkbox.tsx";
import { Input } from "@/shared/ui/input.tsx";
import { useTodos } from "../model/use-todos.ts";
import { useMemo, useState } from "react";
import { SortTodo } from "../domain/domain.ts";
import { TodoListFilterSelector } from "./todo-list-filter-selector.tsx";
import { useFilteredTodos } from "../model/use-filtered-todos.ts";
import { TodoItem } from "./todo-item.tsx";
import { Button } from "@/shared/ui/button.tsx";
import { TrashIcon } from "@radix-ui/react-icons";
import { CreateTodoForm } from "./create-todo-form.tsx";
import { TodoListSortSelector } from "./todo-list-sort-selector.tsx";

export const TodoList = () => {
  const { todos, toggleTodo, addTodo, deleteTodo } = useTodos();
  // Плохая абстракция
  const {
    filteredTodos,
    selectedFilter,
    searchedText,
    changeSearchedText,
    changeFilter,
  } = useFilteredTodos(todos);

  const [sortBy, setSortBy] = useState<SortTodo>("alphabet");

  const sortedTodos = useMemo(() => {
    if (sortBy === "alphabet") {
      return [...filteredTodos!].sort((a, b) => a.text.localeCompare(b.text));
    } else {
      return [...filteredTodos!].sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }
  }, [filteredTodos, sortBy]);

  return (
    <div className={"p-4 flex flex-col gap-2"}>
      <CreateTodoForm onAddTodo={addTodo} />
      <Input
        value={searchedText}
        onChange={(e) => changeSearchedText(e.target.value)}
        placeholder={"find todos"}
      />
      <TodoListFilterSelector
        filterBy={selectedFilter}
        onChangeFilter={(val) => changeFilter(val)}
      />
      <TodoListSortSelector
        sortBy={sortBy}
        onChangeSort={(sort) => setSortBy(sort)}
      />
      {sortedTodos?.map((todo) => (
        <TodoItem
          todo={todo}
          renderExtraAction={
            <div className={"flex gap-2 items-center"}>
              <Checkbox
                onCheckedChange={() => toggleTodo(todo.id)}
                className={"h-6 w-6"}
                checked={todo.completed}
              />
              <Button
                onClick={() => deleteTodo(todo.id)}
                variant={"destructive"}
                size="icon"
              >
                <TrashIcon />
              </Button>
            </div>
          }
        />
      ))}
    </div>
  );
};
