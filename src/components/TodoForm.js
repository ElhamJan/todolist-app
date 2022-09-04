import { useState } from "react";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState("");

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
      <input type="text" value={inputValue} onChange={changeHandler} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
