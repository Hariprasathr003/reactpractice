import React, { useState } from "react";

const user = "Hari";
const fruits = ["Mango", "Apple", "Banana"];
const friends = ["Hari", "Vicky", "Kamalesh"];

function Firsttask() {
  const [count, setCount] = useState(0);


  return (
    <>
      <h1>Hello, {user}</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <ul>
        {friends.map((fri, index) => (
          <li key={index}>{fri}</li>
        ))}
      </ul>

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <br></br>
  
    </>
  );
}


export { Firsttask };
