import React, { useState } from "react";
import "./App.css";
import Step from "./components/Step";
import { DATA } from "./data/data";

function App() {
  let count = false;
  function checkerHandler(data) {
    count = data;
    console.log(data);
  }

  return (
    <div>
      <h1>My StartUp Progress</h1>
      {DATA.map((item, index) => {
        return (
          <Step
            title={item.title}
            list={item.subSteps}
            number={index + 1}
            getChecker={checkerHandler}
          />
        );
      })}
    </div>
  );
}

export default App;
