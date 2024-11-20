import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [newTodoValue, setNewTodoValue] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
    // console.log(event);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // setTodos([input, ...todos]);
    setTodos([
      ...todos,
      { id: Date.now(), name: input, isCheckCompleted: false }, // 10 unique date time with input & checkbox set  false
    ]);
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

  const handleUpdateTodo = (clickedIndex) => {
    setTodos(
      todos.map((todo, index) => (clickedIndex === index ? newTodoValue : todo)) // 6 to update
    );
    setEditIndex(null); // 8 to  remove input box  after updating value.
  };

  // 13 checkbox handling with index
  const handleIsCompleted = (clickedIndex) => {
    setTodos(
      todos.map((todo, index) =>
        index === clickedIndex
          ? { ...todo, isCheckCompleted: !todo.isCheckCompleted }
          : todo
      )
    );
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
            <li key={index} className="todo-item">
              {editIndex === index ? (
                <input
                  type="text"
                  value={newTodoValue}
                  onChange={(e) => setNewTodoValue(e.target.value)} //
                />
              ) : (
                <div
                  className={`todo-checkbox ${
                    todo.isCheckCompleted ? "done" : ""
                  }`} // 14 css apply
                >
                  <input
                    type="checkbox"
                    checked={todo.isCheckCompleted}
                    onClick={() => handleIsCompleted(index)}
                  />
                  <p>{todo.name}</p>
                </div>
                //9 Checkbox added with todo list.
                // 11 todo changed with todo.name
                // 12 checkbox set  as false & handleOnClick is add with checkbx
              )}
              {/* // 2 check the editIndex to show input box or todo list 
               4 add value = newTodoValue 
               6 add on change to target the setNewTodoValue */}

              <div>
                {editIndex === index ? ( // 7 now handler added with index to update newTodoValue
                  <button onClick={() => handleUpdateTodo(index)}>
                    Update
                  </button> // 3 check the editindex to  show update button.
                ) : (
                  <button
                    onClick={() => {
                      setEditIndex(index);
                      setNewTodoValue(todo); // 5 set the old value in input field with todo
                    }}
                  >
                    Edit
                  </button>
                )}
                {/* // 1 setEditindex is imp to show input box by clicking on edit
                imp */}
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

// // map function -> takes a array -> modify it -> return a new Array
