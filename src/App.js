import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
    // console.log(event);
  };

  const handleAdd = () => {
    // setTodos([input, ...todos]);
    setTodos([...todos, input]);
    setInput("");
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          value={input}
          placeholder="Enter text"
          onChange={handleInput}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
      <div>
        {/* <input
          type="text"
          value={input}
          className="input"
          placeholder="Enter text"
          onChange={handleInput}
        /> */}
        {/* <button onClick={handleAdd}>Add</button> */}
        {/* <input type="submit" onClick={handleAdd} value="Add" /> */}
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
