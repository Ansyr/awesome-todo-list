import {
  FILTERS_TODO,
  FilterTodo,
  SORTERS_TODO,
  SortTodo,
} from "../domain/domain.ts";
import { DropdownMenu } from "@/shared/ui/dropdown-menu.tsx";
import {
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu.tsx";
import { Button } from "../../../shared/ui/button.tsx";

export const TodoListSorter = ({
  sortBy,
  onChangeSort,
}: {
  sortBy: SortTodo;
  onChangeSort: (val: SortTodo) => void;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Фильтрация : {SORTERS_TODO[sortBy]}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={sortBy}
          onValueChange={(sort) => onChangeSort(sort as SortTodo)}
        >
          {Object.keys(SORTERS_TODO).map((key) => (
            <DropdownMenuRadioItem key={key} value={key as SortTodo}>
              {SORTERS_TODO[key as SortTodo]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
