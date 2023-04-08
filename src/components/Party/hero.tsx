import React from "react";
import HpCounter from "./hpCounter";
import InitChanger from "./initChanger";

function Hero(props: {
  name: string;
  hpValue: number;
  maxHP: number;
  id: string;
  handleHPChange: any;
  initValue: any;
  handleInitChange: any;
  handleRemove: (arg0: any) => any;
  ally: boolean;
}) {
  return (
    <div className="herocard">
      <div className="heroname">{props.name}</div>
      <HpCounter
        hpValue={props.hpValue}
        maxHP={props.maxHP}
        id={props.id}
        handleHPChange={props.handleHPChange}
      />
      <InitChanger
        id={props.id}
        initValue={props.initValue}
        handleInitChange={props.handleInitChange}
      />
      <button
        onClick={() => {
          props.handleRemove(props.id);
        }}
        className="removehero"
      >
        Remove
      </button>
    </div>
  );
}

export default Hero;
