import React from "react";
import Character from "./character";

function CombatTracker(props: { characters: any[]; handleRemove: any }) {
  let list = props.characters.slice();
  if (list.length === 0) {
    return (
      <React.Fragment>
        <h2>Combat Tracker</h2>
        <h5>There are no Characters, add some Heroes or Enemies</h5>
      </React.Fragment>
    );
  }

  //sort the list based on initiative value, before rendering it.
  const sortedList = list.sort((a, b) => b.initValue - a.initValue);
  return (
    <div className="combattracker">
      <h2>Combat Tracker</h2>
      {sortedList.map((x) => (
        <Character
          key={x.id}
          id={x.id}
          name={x.name}
          initValue={x.initValue}
          handleRemove={props.handleRemove}
          ally={x.ally}
        />
      ))}
    </div>
  );
}

export default CombatTracker;
