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

  return (
    <div>
      <div>
        <input type="text" value={input} onChange={handleInput} className="input" placeholder="Enter text" />
        <button onClick={handleAdd}>Add</button>
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

// controlled component
// un-controlled component
