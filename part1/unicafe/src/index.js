import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) =>
  good + neutral + bad === 0 ? (
    <>No feedback given</>
  ) : (
    <table>
      <tbody>
        <Statistic text={"good"} value={good} />
        <Statistic text={"neutral"} value={neutral} />
        <Statistic text={"bad"} value={bad} />
        <Statistic text={"all"} value={good + neutral + bad} />
        <Statistic
          text={"average"}
          value={(good - bad) / (good + neutral + bad) || 0}
        />
        <Statistic
          text={"positive"}
          value={((good / (good + neutral + bad)) * 100 || 0) + "%"}
        />
      </tbody>
    </table>
  );

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const funGood = () => setGood(good + 1);
  const funNeutral = () => setNeutral(neutral + 1);
  const funBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={funGood} text="good" />
      <Button handleClick={funNeutral} text="neutral" />
      <Button handleClick={funBad} text="bad" />
      <h1>stastics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
