import React, { useState, useEffect } from "react";

//useState

function Task2() {
  const [show, setshow] = useState(true);
  return (
    <div>
      <button onClick={() => setshow(!show)}>Click</button>
      {show && <h1>Hello World</h1>}
    </div>
  );
}

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export { Task2, Users };
