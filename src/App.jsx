import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Add from "./add";
import Have from "./have";
function App() {
  const [pages, setpages] = useState(<Have />);
  const [po, setpo] = useState(19);
  const interval = useRef(null);
  const inter = useRef(null);
  function handle() {
    if (po > 2) {
      inter.current = setInterval(() => {
        setpo((old) => old - 1);
        return () => clearInterval(inter.current);
      });
    }

    setpages(<Add />);
  }
  if (po == 1) clearInterval(inter.current);

  function handlee() {
    if (po < 2) {
      interval.current = setInterval(() => {
        setpo((old) => old + 1);

        return () => clearInterval(interval.current);
      });
    }
    setpages(<Have />);
  }
  if (po == 19) clearInterval(interval.current);

  return (
    <>
      <div className="all">
        <div>{pages}</div>
        <div className="btn-container">
          <div className="slide" style={{ left: `${po}vh` }}></div>
          <button onClick={handle} className="btn">
            Add
          </button>
          <button onClick={handlee} className="btn">
            nfwj
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
