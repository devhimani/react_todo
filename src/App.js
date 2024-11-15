import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
    // console.log(event);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // setTodos([input, ...todos]);
    setTodos([...todos, input]);
    setInput(""); // to clear input
    console.log("form submitted");
  };

  const handleDelete = (clickedIndex) => {
    // const newTodos = todos.filter((todo, index) => {
    //   console.log(todo, index, clickedIndex);
    //   return index !== clickedIndex;
    // });
    // console.log(newTodos);
    setTodos(todos.filter((_todo, index) => index !== clickedIndex));
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
        <button>Add</button>
      </form>
      <div>
        <ul>
          {todos.map((todo, index) => (
            // <li key={index}>{todo}</li>
            <li key={index} className="todo-item">
              <p>{todo}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
