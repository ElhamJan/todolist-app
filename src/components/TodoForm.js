import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState("");
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
      {props.edit ? (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={changeHandler}
            placeholder="Update todo..."
            ref={inputRef}
          />
          <button type="submit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={changeHandler}
            placeholder="Add todo..."
            ref={inputRef}
          />
          <button type="submit">Add</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
