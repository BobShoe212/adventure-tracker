import React from "react";
import InitCounter from "./initCounter";

function Character(props: {
  ally: boolean;
  name: string;
  initValue: any;
  id: any;
  handleRemove: any;
}) {
  return (
    <div className="character">
      <span className={getInitBadgeClasses(props.ally)}>{props.name}</span>
      <InitCounter initValue={props.initValue} />
      {getRemoveEnemyButton(props.id, props.ally, props.handleRemove)}
    </div>
  );
}

export default Character;

function getInitBadgeClasses(ally: boolean) {
  return ally ? "ally" : "enemy";
}

function getRemoveEnemyButton(id: string, ally: boolean, handleRemove: any) {
  if (ally) {
    return;
  }
  return (
    <button
      onClick={() => {
        handleRemove(id);
      }}
      className="deleteenemy"
    >
      Remove
    </button>
  );
}
