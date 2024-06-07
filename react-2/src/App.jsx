import { useReducer } from "react";

import "./App.css";
import "./theme.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newvalue };
    case "CHANGE_AGE":
      return { ...state, age: action.newvalue };
    default:
      return state;
  }
};
const initialData = {
  name: "ebrahem sobhy",
  age: 23,
  startCount: 0,
  theme: "teal",
};

function App() {
  const [allData, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className={`App ${allData.theme} `}>
        <button style={{ marginTop: "50px" }}>Toggle Theme</button>

        <div style={{ marginTop: "44px" }}>
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
          <button style={{ marginRight: "26px" }}>Light</button>

          <button style={{ marginRight: "26px" }}>Dark</button>
          <button style={{ marginRight: "26px" }}>Gray</button>
          <button style={{ marginRight: "26px" }}>Teal</button>
        </div>

        <h1 style={{ marginTop: "66px" }}>my name is {allData.name} </h1>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_NAME", newvalue: "ELRAYEK***" });
          }}
        >
          ChangeName
        </button>

        <br />

        <h1>my age is {allData.age} </h1>

        <button
          onClick={() => {
            dispatch({ type: "CHANGE_AGE", newvalue: "24" });
          }}
        >
          Change Age
        </button>
        <br />

        <button>count is {allData.startCount}</button>
      </div>
    </>
  );
}

export default App;
