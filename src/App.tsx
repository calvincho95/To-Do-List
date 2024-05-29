import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import CreateTodo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";

const App: FC = () => {
  return (
    <Flex flexDir="column" minH="100vh">
      <CreateTodo />
      <ToDoList />
    </Flex>
  );
};

export default App;
