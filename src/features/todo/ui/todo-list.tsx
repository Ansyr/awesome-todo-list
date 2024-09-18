import { Checkbox } from "@/shared/ui/checkbox.tsx";
import { Input } from "@/shared/ui/input.tsx";
import { Button } from "@/shared/ui/button.tsx";
import { TodoListFilter } from "./todo-list-filter.tsx";
import { useFilteredTodos } from "../model/use-filtered-todos.ts";
import { TodoItem } from "./todo-item.tsx";
import { TrashIcon } from "@radix-ui/react-icons";
import { CreateTodoForm } from "./create-todo-form.tsx";
import { TodoListSort } from "./todo-list-sort.tsx";
import { useSortedTodos } from "../model/use-sorted-todos.ts";
import { useTodos } from "../model/use-todos.ts";

export const TodoList = () => {
  const { todos, add, toggle, remove } = useTodos();
  const {
    filteredTodos,
    changeFilter,
    changeSearchText,
    selectedFilter,
    searchedText,
  } = useFilteredTodos(todos);

  const { sortedTodos, sortBy, changeSort } = useSortedTodos({
    todos: filteredTodos ?? [],
  });

  return (
    <div className={"p-4 flex flex-col gap-2 w-full min-h-[800px]"}>
      <div className="sticky top-0 bg-white z-10 p-2">
        <CreateTodoForm onAddTodo={add} />
        <Input
          value={searchedText}
          onChange={(e) => changeSearchText(e.target.value)}
          placeholder={"Найти тудушку"}
          className="mt-2 mb-4"
        />
        <div className="flex pt-2 flex-col sm:flex-row sm: gap-2 justify-between items-center">
          <TodoListSort sortBy={sortBy} onChangeSort={changeSort} />
          <TodoListFilter
            filterBy={selectedFilter}
            onChangeFilter={changeFilter}
          />
        </div>
      </div>
      {sortedTodos.length === 0 ? (
        <div className="flex justify-center items-center flex-grow">
          <span className="text-gray-500 text-lg">Нет тудушек :(</span>
        </div>
      ) : (
        sortedTodos?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            renderExtraAction={
              <div className={"flex gap-2 items-center"}>
                <Checkbox
                  onCheckedChange={() => toggle(todo.id)}
                  className={"h-6 w-6"}
                  checked={todo.completed}
                />
                <Button
                  onClick={() => remove(todo.id)}
                  variant={"destructive"}
                  size="icon"
                >
                  <TrashIcon />
                </Button>
              </div>
            }
          />
        ))
      )}
    </div>
  );
};
