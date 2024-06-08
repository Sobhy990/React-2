import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = {
  name: "ebrahem sobhy",
  age: 20,
  startCount: 0,
  theme: "teal",
};
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

// eslint-disable-next-line react/prop-types
export function ThemeContext({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

const ChangeName = () => {
  dispatch({ type: "CHANGE_NAME", newvalue: "ELERYEK**" });
}
 
const ChangeAge = () => {
  dispatch({ type: "CHANGE_AGE", newvalue: 23 });
}

const ChangeCount = (startCount) => {
  dispatch({ type: "CHANGE_COUNT", newvalue: startCount  });

}

const ToggleTheme = (color) => {
  dispatch({ type: "CHANGE_THEME", newvalue: color   });

}


  return ( 
    <ThemeContexttt.Provider value={{ ...firstState,ChangeName , ChangeAge , ChangeCount , ToggleTheme  }}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
