import { useState } from "react";
import { riddels, Riddle } from "./wordList";
import "./index.css";
function App() {
  type RESULTS = "WON" | "LOST" | "WAITING";
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [peopleSaved, setPeopleSaved] = useState(0);
  const [peopleDied, setPeopleDied] = useState(0);
  const [riddle, setRiddle] = useState<Riddle>(() => {
    return riddels[Math.floor(Math.random() * riddels.length)];
  });
  const [result, setResult] = useState<RESULTS>("WAITING");

  const handleGo = () => {
    if (userAnswer.toLowerCase() === riddle.answer) {
      setResult("WON");
      setPeopleSaved(peopleSaved + 1);
      setUserAnswer("");
      setRiddle(riddels[Math.floor(Math.random() * riddels.length)]);
    } else {
      setResult("LOST");
      setPeopleDied(peopleDied + 1);
    }
  };
  return (
    <>
      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "2rem", textAlign: "center" }}>
          Solve and Save
        </div>
        <div>{riddle.question}</div>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => {
            setUserAnswer(e.target.value);
          }}
        />
        <button onClick={handleGo}>Go</button>
        <div>{result}</div>
        <div className="scene">
          {result === "WAITING" ? (
            <div>
              <div className="person">
                <div className="head">
                  <div className="eyes">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                  </div>
                  <div className="mouth"></div>
                </div>
                <div className="body"></div>
              </div>
            </div>
          ) : result === "LOST" ? (
            <div className="person">
              <div className="head-lost">
                <div className="eyes">
                  <div className="eye left"></div>
                  <div className="eye right"></div>
                </div>
                <div className="mouth"></div>
              </div>
              <div className="body"></div>
            </div>
          ) : (
            <div className="person">
              <div className="head">
                <div className="eyes">
                  <div className="eye left"></div>
                  <div className="eye right"></div>
                </div>
                <div className="mouth-won"></div>
              </div>
              <div className="body"></div>
            </div>
          )}
        </div>
        <div>People Saved : {peopleSaved}</div>
        <div>People Died : {peopleDied}</div>
      </div>
    </>
  );
}

export default App;
