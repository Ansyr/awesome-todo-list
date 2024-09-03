import { Todo } from "../domain/domain.ts";
import { ReactNode } from "react";

export const TodoItem = ({
  todo,
  renderExtraAction,
}: {
  todo: Todo;
  renderExtraAction?: ReactNode;
}) => {
  return (
    <div className="p-4 bg-gray-300 text-secondary text-lg border rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 w-full">
          <p className="font-semibold">{todo.text}</p>
          <div className="border-b border-secondary opacity-50" />
          <p className="text-sm text-gray-500">
            {new Date(todo.createdAt).toLocaleString()}
          </p>
        </div>
        {renderExtraAction}
      </div>
    </div>
  );
};
