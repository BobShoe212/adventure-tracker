import React from "react";

function InitCounter(props: { initValue: number }) {
  return (
    <React.Fragment>
      <span> Initiative:</span>
      <span className="combatinit">{props.initValue}</span>
    </React.Fragment>
  );
}

export default InitCounter;
