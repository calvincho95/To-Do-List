import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import TodoCard from "./TodoCard";

interface TodoList {
  todos: ITodo[];
}

const TodoList: FC<TodoList> = ({ todos }) => {
  return (
    <Flex
      bgColor="gray.50"
      flexGrow={1}
      flexDir="column"
      alignItems="center"
      pt={8}
      gap={2}
    >
      {todos.map((v) => (
        <TodoCard key={v.id} />
      ))}
    </Flex>
  );
};

export default TodoList;
