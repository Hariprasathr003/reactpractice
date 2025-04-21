import { useContext, useEffect, useState, createContext } from "react";

function Task3() {
  const [count, setCount] = useState(0);
  const [cal, setCal] = useState(0);

  useEffect(() => {
    setCal(() => count * 2);
  }, [count]);

  return (
    <div>
      <h1>The Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}> +</button>
      <h1>The count calculation is {cal}</h1>
    </div>
  );
}

const UserContext = createContext();

function Taskusecontext() {
  const [user, setUser] = useState("Hi Everyone");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1>{user}</h1>
      <Component1 />
    </UserContext.Provider>
  );
}

function Component1() {
  return (
    <div>
      <h1>Child class</h1>
      <Component2 />
    </div>
  );
}

function Component2() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>{user}</h1>
      <button
        onClick={() => {
          setUser("Good Day");
        }}
      >
        click to change
      </button>
    </div>
  );
}

export { Task3, Taskusecontext };
