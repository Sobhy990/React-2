import { useState } from "react";

import "./App.css";
import "./theme.css";
function App() {
  const [person, setPerson] = useState("SOBHY");
  const [age, setAge] = useState("22");
  const [count, setCount] = useState(1);
  const [theme, settheme] = useState("");
  return (
    <>
      <div className={`App ${theme}`}>
        <button
          onClick={() => {
            settheme(theme == "" ? "dark" : "");
          }}
          style={{ marginTop: "50px" }}
        >
          Toggle Theme
        </button>

<div   onChange={() => {  
            settheme(theme == "" ? "dark" : "");
          }} style={{marginTop:"44px"}}>
          <label htmlFor="theme" className="theme">
            <span>Light</span>
            <span className="theme__toggle-wrap">
              <input
                id="theme"
                className="theme__toggle"
                type="checkbox"
                role="switch"
                name="theme"
                defaultValue="dark"
              />
              <span className="theme__fill" />
              <span className="theme__icon">
                <span className="theme__icon-part" />
                <span className="theme__icon-part" />
                <span className="theme__icon-part" />
                <span className="theme__icon-part" />
                <span className="theme__icon-part" />
                <span className="theme__icon-part" />
                <span className="theme__icon-part" />
                <span className="theme__icon-part" />
                <span className="theme__icon-part" />
              </span>
            </span>
            <span>Dark</span>
          </label>
</div>

        <div style={{ marginTop: "44px" }}>
          <button
            onClick={() => {
              settheme("light");
            }}
            style={{ marginRight: "26px" }}
          >
            Light
          </button>

          <button
            onClick={() => {
              settheme("dark");
            }}
            style={{ marginRight: "26px" }}
          >
            Dark
          </button>
          <button
            onClick={() => {
              settheme("gray");
            }}
            style={{ marginRight: "26px" }}
          >
            Gray
          </button>
          <button
            onClick={() => {
              settheme("teal");
            }}
            style={{ marginRight: "26px" }}
          >
            Teal
          </button>
        </div>

        <h1 style={{ marginTop: "66px" }}>my name is {person}</h1>
        <button
          onClick={() => {
            setPerson("ELRAYEK***");
          }}
        >
          ChangeName
        </button>

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
