import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (event) => {
    // console.log(event.target.value);
    setInput(event.target.value);
  };

  const handleAdd = () => {
    setTodos([input, ...todos]);
    setInput(""); // clear input
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // console.log("form submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={input} onChange={handleInput} className="input" placeholder="Enter text" />
        <button onClick={handleAdd}>Add</button>
        {/* <input type="submit" onClick={handleAdd} value="Add" /> */}
      </form>

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

// controlled component
// un-controlled component
