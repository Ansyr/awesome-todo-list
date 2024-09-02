import {Layout} from "./shared/ui/layout.tsx";
import {TodoList} from "./features/todo/ui/todo-list.tsx";

function App() {
  return (
    <Layout content={<TodoList/>}/>
  )
}

export default App
