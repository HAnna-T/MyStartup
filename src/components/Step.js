import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Step.css";

function Step(props) {
  const [checkedSteps, setCheckedSteps] = useState(
    new Array(props.list.length).fill(false)
  );

  const checkedStepHandler = (index) => (e) => {
    console.log(index);
    console.log(e.target.checked);

    const newArr = [...checkedSteps];
    newArr[index] = e.target.checked;
    console.log(newArr);
    setCheckedSteps(newArr);
    // console.log(checkedSteps);
  };
  return (
    <div className="mainContainer">
      <div className="mainHeader">
        <button>{props.number}</button>
        <h2>{props.title}</h2>
      </div>

      <ul className="subSteps">
        {props.list.map((name, index) => {
          return (
            <li key={index}>
              <div className="subStep_item">
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={name}
                  value={name}
                  checked={checkedSteps[index]}
                  onChange={checkedStepHandler(index)}
                />
                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Step;
