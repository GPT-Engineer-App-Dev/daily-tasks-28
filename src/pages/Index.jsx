import { useState } from "react";
import { Container, VStack, HStack, Input, Button, IconButton, Text, Checkbox, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodos(todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="Add a new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Button onClick={addTodo} colorScheme="teal">
            Add
          </Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {todos.map((todo, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)}>
                <Text as={todo.completed ? "s" : "span"}>{todo.text}</Text>
              </Checkbox>
              <IconButton aria-label="Delete task" icon={<FaTrash />} colorScheme="red" onClick={() => deleteTodo(index)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
