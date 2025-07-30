import { useEffect, useState } from "react";
import "./have.css";

function Have() {
  const [joke, setjoke] = useState();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/get/").then((response) => {
      if (!response.ok) {
        return response.status;
      }
      setjoke(response.text());
    });
  }, []);

  function handle() {
    fetch("http://127.0.0.1:8000/get/").then((response) => {
      if (!response.ok) {
        return response.status;
      }
      setjoke(response.text());
    });
  }
  return (
    <>
      <div className="nokat-container">
        {joke}
        <button onClick={handle} className="fun-red-button">
          zidk hdi
        </button>
      </div>
    </>
  );
}
export default Have;
