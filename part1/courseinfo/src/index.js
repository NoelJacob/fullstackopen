import React from "react";
import ReactDOM from "react-dom";

const Header = (a) => {
  console.log(a.course);
  return <h1>{a.course}</h1>;
};
const Part = (d) => {
  return (
    <>
      <p>
        {d.part} {d.exercises}
      </p>
    </>
  );
};
const Content = (b) => {
  return (
    <>
      <Part part={b.parts[0].name} exercises={b.parts[0].exercises} />
      <Part part={b.parts[1].name} exercises={b.parts[1].exercises} />
      <Part part={b.parts[2].name} exercises={b.parts[2].exercises} />
    </>
  );
};
const Total = (c) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {c.parts[0].exercises + c.parts[1].exercises + c.parts[2].exercises}
      </p>
    </>
  );
};
const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
