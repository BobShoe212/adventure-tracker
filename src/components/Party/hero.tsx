import React from "react";
import HpCounter from "./hpCounter";
import InitChanger from "./initChanger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTrashCan);

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
      <span className="heroname">{props.name}</span>
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
        <FontAwesomeIcon icon="trash-can" />
      </button>
    </div>
  );
}

export default Hero;
