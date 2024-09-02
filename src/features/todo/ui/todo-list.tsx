import { Checkbox } from "../../../shared/ui/checkbox.tsx";
import { Input } from "../../../shared/ui/input.tsx";
import { useTodos } from "../model/use-todos.ts";
import { useMemo, useState } from "react";
import { SortTodo } from "../domain/domain.ts";
import { TodoListFilters } from "./todo-list-filters.tsx";
import { useFilteredTodos } from "../model/use-filtered-todos.ts";

export const TodoList = () => {
  const { todos, toggleTodo } = useTodos();
  const { filteredTodos, selectedFilter, changeFilter } =
    useFilteredTodos(todos);
  const [searchText, setSearchText] = useState("");
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
      <Input placeholder={"add todo"} />
      <Input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder={"find todos"}
      />
      <TodoListFilters
        filterBy={selectedFilter}
        onChangeFilter={(val) => changeFilter(val)}
      />
      {sortedTodos?.map((todo) => (
        <div className="p-4 bg-gray-300 text-secondary text-lg border rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2 w-full">
              <p className="font-semibold">{todo.text}</p>
              <div className="border-b border-secondary opacity-50" />
              <p className="text-sm text-gray-500">
                {new Date(todo.createdAt).toLocaleString()}
              </p>
            </div>
            <Checkbox
              onCheckedChange={() => toggleTodo(todo.id)}
              className={"h-6 w-6"}
              checked={todo.completed}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
