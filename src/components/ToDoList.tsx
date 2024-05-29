import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import TodoCard from "./TodoCard";

const ToDoList: FC = () => {
  return (
    <Flex
      bgColor="green.100"
      flexGrow={1}
      flexDir="column"
      alignItems={"center"}
      pt={8}
    >
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </Flex>
  );
};

export default ToDoList;
