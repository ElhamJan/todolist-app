const Todo = ({ todo, onComplete, onRemove }) => {
  return (
    <div className="todo">
      <div className={todo.isCompleted ? "completed" : ""} onClick={onComplete}>
        {todo.text}
      </div>
      <div>
        <button>Edit</button>
        <button onClick={onRemove}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
