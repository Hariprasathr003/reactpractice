// import logo from "./logo.svg";
import "./App.css";
import { Firsttask } from "./task/firsttask";
import { Task2, Users } from "./task/task2";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Firsttask />
      <Task2 />
      <Users />
    </div>
  );
}

export default App;
