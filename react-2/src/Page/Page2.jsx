
import {useContext ,  } from "react";
import ThemeContext from "../context/ThemeContext";
const Page2 = () => {
  const {name, ChangeName , theme} = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <h1>welecom to page2</h1>
      <h2 >i`m sobhy {name}</h2>
      <button onClick={() => {
        ChangeName()
      }
      }>ChangeName</button>
    </div>
  );
}

export default Page2;
