import { ChangeEvent, useState } from "react";
import { TodoProcessor } from "./use-todos.ts";

export const useTodosSearchProcessor = () => {
  const [searchedText, setSearchedText] = useState("");
  const searchProcessor: TodoProcessor = (todos) =>
    todos.filter((todo) => todo.text.toLowerCase().includes(searchedText));

  const changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedText(e.target.value);
  };

  return {
    processor: searchProcessor,
    searchText: searchedText,
    changeSearch,
  };
};
