import { useEffect, useState } from "react";
import "./add.css";
function Add() {
  const [joke, setjoke] = useState("");

  function handle() {
    fetch("http://127.0.0.1:8000/add/", {
      method: "POST",
      body: joke,
    }).then((Response) => {
      if (Response.ok) {
        alert("done");
      }
    });
  }

  return (
    <>
      <div className="addall">
        <textarea
          value={joke}
          onChange={(e) => setjoke(e.target.value)}
          className="text-input"
        ></textarea>
        <button onClick={handle} className="send-button">
          send
        </button>
      </div>
    </>
  );
}
export default Add;
/*
 

*/
