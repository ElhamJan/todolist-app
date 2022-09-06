import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

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

  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onComplete={completeTodoHandler}
        onRemove={removeTodoHandler}
        onUpdate={updateTodoHandler}
      />
    </div>
  );
};

export default TodoApp;
