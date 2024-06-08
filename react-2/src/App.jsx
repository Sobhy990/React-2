import { useReducer } from "react";

import "./App.css";
import "./theme.css";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newvalue };
    case "CHANGE_AGE":
      return { ...state, age: action.newvalue };
    case "CHANGE_COUNT":
      return { ...state, startCount: action.newvalue };
    case "CHANGE_THEME":
      return { ...state, theme: action.newvalue };

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
      
      <Link to="/page2">
    GO TO PAGE 2
      </Link>
      
      
      
      
      
      
      
      
        <button
          onClick={() => {
            dispatch({
              type: "CHANGE_THEME",
              newvalue: allData.theme == "teal" ? "dark" : "teal",
            });
          }}
          style={{ marginTop: "50px" }}
        >
          Toggle Theme
        </button>

        <div
          onChange={() => {
            dispatch({
              type: "CHANGE_THEME",
              newvalue: allData.theme == "teal" ? "dark" : "teal",
            });
          }}
          style={{ marginTop: "44px" }}
        >
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
              dispatch({ type: "CHANGE_THEME", newvalue: "light" });
            }}
            style={{ marginRight: "26px" }}
          >
            Light
          </button>

          <button
            onClick={() => {
              dispatch({ type: "CHANGE_THEME", newvalue: "dark" });
            }}
            style={{ marginRight: "26px" }}
          >
            Dark
          </button>
          <button
            onClick={() => {
              dispatch({ type: "CHANGE_THEME", newvalue: "gray" });
            }}
            style={{ marginRight: "26px" }}
          >
            Gray
          </button>
          <button
            onClick={() => {
              dispatch({ type: "CHANGE_THEME", newvalue: "teal" });
            }}
            style={{ marginRight: "26px" }}
          >
            Teal
          </button>
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

        <button
          onClick={() => {
            dispatch({
              type: "CHANGE_COUNT",
              newvalue: allData.startCount + 1,
            });
          }}
        >
          count is {allData.startCount}
        </button>
      </div>
    </>
  );
}

export default App;
