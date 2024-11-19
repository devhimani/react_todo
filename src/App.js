import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [newTodoValue, setNewTodoValue] = useState("");

  const handleInput = (event) => {
    // console.log(event.target.value);
    setInput(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    setTodos([...todos, { id: Date.now(), name: input, isCompleted: false }]);
    setInput(""); // clear input
  };

  const handleDelete = (clickedIndex) => {
    setTodos(todos.filter((todo, index) => index !== clickedIndex));
  };

  const handleUpdateTodo = (clickedIndex) => {
    // console.log(clickedIndex);
    // console.log(newTodoValue);
    const newTodos = todos.map((todo, index) => (clickedIndex === index ? newTodoValue : todo));
    // console.log(newTodos);
    setTodos(newTodos);
    setEditIndex(null);
  };

  const handleIsCompleted = (clickedIndex) => {
    const updatedTodos = todos.map((todo, index) =>
      index === clickedIndex ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={input} onChange={handleInput} className="input" placeholder="Enter text" />
        <button>Add</button>
      </form>

      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              {editIndex === index ? (
                <input type="text" value={newTodoValue} onChange={(e) => setNewTodoValue(e.target.value)} />
              ) : (
                <div className={`todo ${todo.isCompleted ? "done" : ""}`}>
                  <input type="checkbox" checked={todo.isCompleted} onClick={() => handleIsCompleted(index)} />
                  <p>{todo.name}</p>
                </div>
              )}

              <div>
                {editIndex === index ? (
                  <button onClick={() => handleUpdateTodo(index)}>Update</button>
                ) : (
                  <button
                    onClick={() => {
                      setEditIndex(index);
                      setNewTodoValue(todo);
                    }}
                  >
                    Edit
                  </button>
                )}

                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

/**
 * create edit button > add onClick handler > setEditIndex (which index to edit)
 * match todos index with clickedIndex > show input box & show update button instead of edit button
 * click update button > set new todo value in the same index todo value
 */

// [
//   { id: 85643, name: "task1", isCompleted: false },
//   { id: 85643, name: "task2", isCompleted: true },
//   "task3"
// ];

// const a = "hello";
// const b = {
//   name: "hello",
//   age: 20,
// };

// map function -> takes a array -> modify it -> return a new Array
