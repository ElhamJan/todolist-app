import Todo from "./Todo";

const TodoList = ({ todos, onComplete, onRemove }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <p>Add some todos!</p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onRemove={() => onRemove(todo.id)}
        />
      );
    });
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;
