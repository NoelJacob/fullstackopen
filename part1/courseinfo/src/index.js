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
      <Part part={b[1].name} exercises={b[1].exercises} />
      <Part part={b[2].name} exercises={b[2].exercises} />
      <Part part={b[3].name} exercises={b[3].exercises} />
    </>
  );
};
const Total = (c) => {
  return (
    <>
      <p>
        Number of exercises {c[1].exercises + c[2].exercises + c[3].exercises}
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
