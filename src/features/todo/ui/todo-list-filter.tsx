import { DropdownMenu } from "@/shared/ui/dropdown-menu.tsx";
import {
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu.tsx";
import { Button } from "../../../shared/ui/button.tsx";
import { FILTERS_TODO, FilterTodo } from "../model/domain.ts";

export const TodoListFilter = ({
  filterBy,
  onChangeFilter,
}: {
  filterBy: FilterTodo;
  onChangeFilter: (val: FilterTodo) => void;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Фильтрация : {FILTERS_TODO[filterBy]}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={filterBy}
          onValueChange={(filter) => onChangeFilter(filter as FilterTodo)}
        >
          {Object.keys(FILTERS_TODO).map((key) => (
            <DropdownMenuRadioItem key={key} value={key as FilterTodo}>
              {FILTERS_TODO[key as FilterTodo]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
