import { Layout } from "../shared/ui/layout.tsx";
import { TodoList } from "@/features/todo";

export const App = () => {
  return (
    <Layout
      content={
        <div className={"flex justify-center items-center h-full"}>
          <div className={"max-w-2xl w-full max-h-[800px] overflow-y-auto"}>
            <TodoList />
          </div>
        </div>
      }
    />
  );
};
