import React, { useState, useEffect } from "react";

//useState

function Task2() {
  const [show, setshow] = useState("Dhoni");
  return (
    <div>
      <h1>My favorite cricket player is {show}</h1>
      <button onClick={() => setshow("Raina")}>Click</button> 
      <button onClick={() => setshow("Virat")}>Click</button>
      <button onClick={() => setshow("Rohit")}>Click</button>
    </div>
  );
}

const Users = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? <h1>Hello World!</h1> : null}
    </div>
  );
};

export { Task2, Users };
