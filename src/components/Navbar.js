import Select from "react-select";

const Navbar = ({ unCompletedTodos, onChange, selectedOptions }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Uncompleted", label: "Uncompleted" },
  ];

  if (!unCompletedTodos) return <h2>Set your today todos!</h2>;

  return (
    <header>
      <span>{unCompletedTodos}</span>
      <h2>are not complete!</h2>
      <Select
        onChange={onChange}
        value={selectedOptions}
        options={options}
        className="select"
      />
      {/* <select onChange={onSelect} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select> */}
    </header>
  );
};

export default Navbar;
