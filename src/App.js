import React, { useState } from "react";
import "./App.css";
import Step from "./components/Step";
import { DATA } from "./data/data";

function App() {
  return (
    <div>
      <h1>My StartUp Progress</h1>
      {/* <Step title="Foundation" list={["one", "two", "tree"]} number="2" /> */}
      {DATA.map((item, index) => {
        return (
          <Step title={item.title} list={item.subSteps} number={index + 1} />
        );
      })}
    </div>
  );
}

export default App;
