import "./styles.css";
import { useState, useEffect, useRef } from "react";
import "./styles.css";
import { Car } from "./car";

export default function App() {
  const [signal, setSignal] = useState("red");
  const [time, setTime] = useState(5000);

  const changeSignal = () => {
    if (signal === "red") {
      setTime(10000);
      return setSignal("green");
    }
    if (signal === "yellow") {
      setTime(5000);
      return setSignal("red");
    }
    if (signal === "green") {
      setTime(3000);
      return setSignal("yellow");
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeSignal();
    }, time);
    return () => clearInterval(timer);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h3>Semáforo {time / 1000} seg</h3>
      <button onClick={changeSignal}>Change signal</button>
      <button
        onClick={() => {
          setSignal(() => (signal === "OffSignal" ? "yellow" : "OffSignal")),
            setTime(4000);
        }}
      >
        {signal === "OffSignal" ? "Active Signal" : "Desactive Signal"}
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100px",
          height: "200px",
          backgroundColor: "black",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            backgroundColor: signal == "red" ? "red" : "grey",
            transition: "background-color 0.2s ease",
          }}
        ></div>
        <div
          className={signal == "OffSignal" ? "blinking-box" : ""}
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            backgroundColor: signal == "yellow" ? "yellow" : "grey",
            transition: "background-color 0.6s ease",
          }}
        ></div>
        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            backgroundColor: signal == "green" ? "green" : "grey",
            transition: "background-color 1s ease",
          }}
        ></div>
      </div>
      <div style={{ margin: 100 }}>
        <Car paused={signal === "red" ? true : false} />
      </div>
    </div>
  );
}
