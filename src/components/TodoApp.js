import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodoHandler = (inputVal) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: inputVal,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodoHandler = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const removeTodoHandler = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodoHandler = (id, newValue) => {
    const index = todos.findIndex((t) => t.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };

  return (
    <div className="container">
      <Navbar
        unCompletedTodos={todos.filter((t) => !t.isCompleted).length}
        filterTodos={filterTodos}
        onChange={selectHandler}
        selectedOption={selectedOption}
      />
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodoHandler}
        onRemove={removeTodoHandler}
        onUpdate={updateTodoHandler}
      />
    </div>
  );
};

export default TodoApp;
