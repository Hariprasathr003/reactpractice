import React, { useState } from "react";

const user = "Hari";
const fruits = ["Mango", "Apple", "Banana"];
const friends = ["Hari", "Vicky", "Kamalesh"];

function Firsttask() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Hello, {user}</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <ul>
        {friends.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <br></br>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? <h1>Hello World!</h1> : null}
    </>
  );
}


export { Firsttask };
