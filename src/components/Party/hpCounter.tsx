import React from "react";
import { useState } from "react";

function HpCounter(props: {
  id: string;
  hpValue: number;
  maxHP: number;
  handleHPChange: (arg0: string, arg1: number) => void;
}) {
  const heroTextBoxID = "heroHPTextbox" + props.id;
  const [hpChange, setHPChange] = useState(0);

  return (
    <div className="hpcard">
      <div className="hpvalue">
        HP:
        <span className={getBadgeClasses(props.hpValue)}>
          {formathpValue(props.hpValue, props.maxHP)}
        </span>
      </div>
      <button
        onClick={() => props.handleHPChange(props.id, hpChange)}
        className="hpup"
      >
        +
      </button>
      <input
        className="hpinput"
        type="number"
        id={heroTextBoxID}
        placeholder="Heal/Damage"
        required={true}
        onChange={(e) => setHPChange(e.currentTarget.valueAsNumber)}
      ></input>
      <button
        onClick={() => {
          props.handleHPChange(props.id, 0 - hpChange);
        }}
        className="hpdown"
        disabled={isHPZero(props.hpValue)}
      >
        -
      </button>
    </div>
  );
}

export default HpCounter;

function isHPZero(hp: number) {
  return hp === 0;
}

function getBadgeClasses(x: number) {
  let classes = "badge m-2 bg-";
  classes += x === 0 ? "danger" : "primary";
  return classes;
}

function formathpValue(x: number, y: number) {
  return x === 0 ? "Zero" : x + "/" + y;
}
