import Input from "./components/Input";

const App = () => {
  return (
    <div>
      <Input />

      <div>
        <input type="text" className="input" placeholder="Enter text"></input>
        <button>Add</button>
      </div>

      <div>
        <ul>
          <li>Task 1</li>
          <li>Task 2 </li>
          <li>Task 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
