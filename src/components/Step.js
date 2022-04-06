import React, { useState } from "react";
import "./Step.css";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";

function Step(props) {
  const [checkedSteps, setCheckedSteps] = useState(
    new Array(props.list.length).fill(false)
  );

  const checkedStepHandler = (index) => (e) => {


    const newArr = [...checkedSteps];
    newArr[index] = e.target.checked;
    setCheckedSteps(newArr);
  };

  let checker = checkedSteps.every((item) => item === true);
  props.getChecker(checker);

  return (
    <div className="mainContainer">
      <div className="mainHeader">
        <button>{props.number}</button>
        <h2>{props.title}</h2>
        <p>{checker ? <FaCheck size={30} /> : null}</p>
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
