import { Button, Flex, Input } from "@chakra-ui/react";
import { FC } from "react";

const CreateTodo: FC = () => {
  return (
    <Flex
      px={8}
      bgColor="blue.200"
      h={32}
      justifyContent="cetner"
      alignItems="center"
    >
      <Input />
      <Button ml={5} bgColor="orange.300">
        {" "}
        만들기
      </Button>
    </Flex>
  );
};

export default CreateTodo;
