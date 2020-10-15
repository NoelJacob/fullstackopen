import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(
    Math.floor(Math.random() * props.anecdotes.length)
  );
  const [points, setPoints] = useState(new Uint8Array(props.anecdotes.length));
  const [highest, setHighest] = useState("Vote to show results");
  console.log("current points", points);

  const clickSelected = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  };
  const clickPoints = () => {
    let newPoints = points;
    newPoints[selected] += 1;
    console.log("update", newPoints);
    setHighest(props.anecdotes[newPoints.indexOf(Math.max(...newPoints))]);
    setPoints(newPoints);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <div>
        <button onClick={clickPoints}>vote</button>
        <button onClick={clickSelected}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      {highest}
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
