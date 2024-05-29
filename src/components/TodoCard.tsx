import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

const TodoCard: FC<ToDoCard> = (todo) => {
  return (
    <Flex bgColor="gray.200" px={4} py={4} rounded="xl" gap={4}>
      <Text fontSize={20} bgColor="blue.100" p={4} w={48} isTruncated={true}>
        {todo.content}
      </Text>
      <Button colorScheme="blue">
        <FiEdit3 />
      </Button>
      <Button colorScheme="red">
        <FiTrash2 />
      </Button>
    </Flex>
  );
};

export default TodoCard;
