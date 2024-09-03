import { Layout } from "../shared/ui/layout.tsx";
import { TodoList } from "@/features/todo";

export const App = () => {
  return <Layout content={<TodoList />} />;
};
