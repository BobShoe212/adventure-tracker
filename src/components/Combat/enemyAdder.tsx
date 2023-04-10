import React, { useState } from "react";

function EnemyAdder(props: {
  addCharacter: (
    arg0: string,
    arg1: number,
    arg2: number,
    arg3: boolean
  ) => void;
}) {
  const [newName, setNewName] = useState("");
  const [newQuantity, setNewQuantity] = useState(1);
  const [newInitiative, setNewInitiative] = useState(1);

  return (
    <div className="addenemy">
      <div>Add some enemies:</div>
      <div className="enemyform">
        <input
          className="enemytypeinput"
          type="text"
          id="enemyNameTextbox"
          placeholder="Enter Enemy type"
          required={true}
          onChange={(e) => setNewName(e.currentTarget.value)}
        ></input>
        <input
          className="enemynumberinput"
          type="number"
          id="enemyNumberTextbox"
          placeholder="Enter Quantity"
          required={true}
          onChange={(e) => setNewQuantity(e.currentTarget.valueAsNumber)}
        ></input>
        <input
          className="enemynumberinput"
          type="number"
          id="enemyInitTextbox"
          placeholder="Enter Initiative"
          required={true}
          onChange={(e) => setNewInitiative(e.currentTarget.valueAsNumber)}
        ></input>
        <button
          onClick={() =>
            props.addCharacter(newName, newQuantity, newInitiative, false)
          }
        >
          Add Enemy
        </button>
      </div>
    </div>
  );
}

export default EnemyAdder;
