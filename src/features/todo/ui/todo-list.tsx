import { Checkbox } from "@/shared/ui/checkbox.tsx";
import { Input } from "@/shared/ui/input.tsx";
import { useState } from "react";
import { FilterTodo, SortTodo } from "../model/domain.ts";
import { TodoListFilter } from "./todo-list-filter.tsx";
import { useFilteredTodos } from "../model/use-filtered-todos.ts";
import { TodoItem } from "./todo-item.tsx";
import { Button } from "@/shared/ui/button.tsx";
import { TrashIcon } from "@radix-ui/react-icons";
import { CreateTodoForm } from "./create-todo-form.tsx";
import { TodoListSort } from "./todo-list-sort.tsx";
import { useSortedTodos } from "../model/use-sorted-todos.ts";
import { useTodos } from "../model/use-todos.ts";

export const TodoList = () => {
  const { todos, handleAddTodo, handleDeleteTodo, handleToggleTodo } =
    useTodos();
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState<SortTodo>("alphabet");
  const [selectedFilter, setSelectedFilter] = useState<FilterTodo>("all");
  const { filteredTodos } = useFilteredTodos({
    selectedFilter: selectedFilter,
    searchedText: searchText,
    todos,
  });
  const { sortedTodos } = useSortedTodos({
    todos: filteredTodos ?? todos,
    sortBy: sortBy,
  });

  return (
    <div className={"p-4 flex flex-col gap-2"}>
      <CreateTodoForm onAddTodo={handleAddTodo} />
      <Input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder={"find todos"}
      />
      <TodoListFilter
        filterBy={selectedFilter}
        onChangeFilter={(val) => setSelectedFilter(val)}
      />
      <TodoListSort sortBy={sortBy} onChangeSort={(sort) => setSortBy(sort)} />
      {sortedTodos?.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          renderExtraAction={
            <div className={"flex gap-2 items-center"}>
              <Checkbox
                onCheckedChange={() => handleToggleTodo(todo.id)}
                className={"h-6 w-6"}
                checked={todo.completed}
              />
              <Button
                onClick={() => handleDeleteTodo(todo.id)}
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
