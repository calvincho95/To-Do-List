import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import CreateTodo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";

const sampleData: ITodo[] = [
  {
    id: 1,
    todo: "🏃‍♀️ 달리기",
    isDone: false,
  },
  {
    id: 2,
    todo: "풍선구매",
    isDone: false,
  },
  {
    id: 3,
    todo: "청소하기",
    isDone: false,
  },
];

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(sampleData);

  return (
    <Flex flexDir="column" minH="100vh">
      <CreateTodo />
      <ToDoList todos={todos} />
    </Flex>
  );
};

export default App;
