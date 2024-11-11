import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (event) => {
    // console.log(event.target.value);
    setInput(event.target.value);
  };

  const handleAdd = () => {
    setTodos([...todos, input]);
    setInput(""); // clear input
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // console.log("form submitted");
  };

  const handleDelete = (clickedIndex) => {
    // console.log(clickedIndex);
    // const newTodos = todos.filter((todo, index) => {
    //   console.log(todo, index, clickedIndex);
    //   return index !== clickedIndex;
    // });
    // console.log(newTodos);
    setTodos(todos.filter((todo, index) => index !== clickedIndex));
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

// controlled component
// un-controlled component
