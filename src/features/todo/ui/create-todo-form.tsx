import { Input } from "@/shared/ui/input.tsx";
import { FormEvent, useState } from "react";

export const CreateTodoForm = ({
  onAddTodo,
}: {
  onAddTodo: (text: string) => void;
}) => {
  const [addTodoText, setAddTodoText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTodo(addTodoText);
    setAddTodoText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={addTodoText}
        onChange={(e) => setAddTodoText(e.target.value)}
        placeholder={"add todo"}
      />
    </form>
  );
};
