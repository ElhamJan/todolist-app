import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onRemove, onUpdate }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (newValue) => {
    onUpdate(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodos = () => {
    if (todos.length === 0) return <p>Add some todos!</p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onRemove={() => onRemove(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div>
      {edit.id ? (
        <TodoForm addTodoHandler={editTodo} edit={edit} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
