import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState(
    props.edit ? props.edit.text : ""
  );
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      alert("Enter todo!");
      return;
    }
    props.addTodoHandler(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <input
          type="text"
          value={inputValue}
          onChange={changeHandler}
          placeholder={props.edit ? "Update value ..." : "Add new todo ..."}
          ref={inputRef}
        />
        <button
          type="submit"
          className={`btn ${props.edit ? "update" : "add"}`}
        >
          {props.edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
