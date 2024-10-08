export type Todo = {
  id: string;
  text: string;
  createdAt: string;
  completed: boolean;
};

export const SORTERS_TODO = {
  date: "Дата",
  alphabet: "Алфавит",
} as const;

export type SortTodo = keyof typeof SORTERS_TODO;

export const FILTERS_TODO = {
  all: "Все",
  completed: "Завершенные",
  unсompleted: "Не завершенные",
} as const;

export type FilterTodo = keyof typeof FILTERS_TODO;
