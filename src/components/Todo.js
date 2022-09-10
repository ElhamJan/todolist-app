const Todo = ({ todo, onComplete, onRemove, onEdit }) => {
  return (
    <div className="todo">
      <div
        className={`todoText ${todo.isCompleted ? "completed" : ""}`}
        onClick={onComplete}
      >
        {todo.text}
      </div>
      <div>
        <button className="btn" onClick={onEdit}>
          Edit
        </button>
        <button className="btn remove" onClick={onRemove}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
