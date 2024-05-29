import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import CreateTodo2 from "./components/CreateTodo2";
import TodoList2 from "./components/TodoList2";

const sampleData: ITodo[] = [
  {
    id: 1,
    content: "🏃‍♀️ 달리기",
    isDone: false,
  },
  {
    id: 2,
    content: "🎈 풍선구매",
    isDone: false,
  },
  {
    id: 3,
    content: "🧹 청소하기",
    isDone: false,
  },
];

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(sampleData);

  return (
    <Flex flexDir="column" minH="100vh">
      <CreateTodo2 todos={todos} setTodos={setTodos} />
      <TodoList2 todos={todos} />
    </Flex>
  );
};

export default App;
