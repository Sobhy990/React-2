import "./App.css";
import "./theme.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_NAME":
//       return { ...state, name: action.newvalue };
//     case "CHANGE_AGE":
//       return { ...state, age: action.newvalue };
//     case "CHANGE_COUNT":
//       return { ...state, startCount: action.newvalue };
//     case "CHANGE_THEME":
//       return { ...state, theme: action.newvalue };

//     default:
//       return state;
//   }
// };
// const initialData = {
//   name: "ebrahem sobhy",
//   age: 23,
//   startCount: 0,
//   theme: "teal",
// };

function App() {
  const {
    name,
    ChangeName,
    age,
    ChangeAge,
    startCount,
    ChangeCount,
    theme,
    ToggleTheme,
  
  } = useContext(ThemeContext);
  // const [allData, dispatch] =  useReducer(reducer, initialData);

  return (
    <>
      <div className={`App ${theme} `}>
        <Link to="/page2">GO TO PAGE 2</Link>

        <button
          onClick={() => {
            ToggleTheme( theme == "teal" ? "dark" : "teal");
          }}
          style={{ marginTop: "50px" }}
        >
          Toggle Theme
        </button>

        <div style={{ marginTop: "44px" }}>
          <label onChange={() => {
            ToggleTheme( theme == "teal" ? "dark" : "teal");
          }} htmlFor="theme" className="theme">
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
          <button onClick={() => {
              ToggleTheme("light");
          }
          } style={{ marginRight: "26px" }}>Light</button>

          <button onClick={() => {
              ToggleTheme("dark");
          }
          } style={{ marginRight: "26px" }}>Dark</button>
          <button onClick={() => {
              ToggleTheme("gray");
          }
          } style={{ marginRight: "26px" }}>Gray</button>
          <button onClick={() => {
              ToggleTheme("teal");
          }
          } style={{ marginRight: "26px" }}>Teal</button>
        </div>

        <h1 style={{ marginTop: "66px" }}>my name is {name} </h1>
        <button
          onClick={() => {
            ChangeName();
          }}
        >
          ChangeName
        </button>

        <h1>my age is {age} </h1>

        <button
          onClick={() => {
            ChangeAge();
          }}
        >
          Change Age
        </button>
        <br />

        <button
          onClick={() => {
            ChangeCount(startCount+1);
          }}
        >
          count is {startCount}
        </button>
      </div>
    </>
  );
}

export default App;
