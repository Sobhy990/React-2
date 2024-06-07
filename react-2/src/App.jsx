import { useState } from "react";

import "./App.css";

function App() {
  const [person, setPerson] = useState("SOBHY");
  const [age, setAge] = useState("22");
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="card">
        <h1>my name is {person}</h1>
        <button
          onClick={() => {
            setPerson("ELRAYEK***");
          }}
        >
          ChangeName
        </button>

        <br />
        <br />
        <br />

        <h1>my age is {age}</h1>

        <button
          onClick={() => {
            setAge("23");
          }}
        >
          Change Age
        </button>
        <br />
        <br />
        <br />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
