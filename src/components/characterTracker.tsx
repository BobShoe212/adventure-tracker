import { useState, useEffect } from "react";
import PartyTracker from "./Party/partyTracker";
import HeroAdder from "./Party/heroAdder";
import CombatTracker from "./Combat/combatTracker";
import EnemyAdder from "./Combat/enemyAdder";
import addCharacter from "../actions/addCharacter";
import "./tracker.css";

export interface Character {
  id: string;
  name: string;
  hpValue: number;
  maxHP: number;
  initValue: number;
  ally: boolean;
}

function CharacterTracker() {
  //sets the state for characterList, with an initial state loaded from local storage
  const [characterList, setCharacterList] = useState(loadFromLocalStorage());

  //TODO add a function to save the party and load up a different party
  //TODO will require a change from saving a CharacterList to saving an array of characterLists.
  //TODO I can also save an array of party names in state so that a party can be loaded from local storage

  //saves the current state to local storage if it has changed
  useEffect(() => {
    localStorage.setItem("characterListKey", JSON.stringify(characterList));
  }, [characterList]);

  //handle an hp change button click and change the hp value of the specified character, based on the id given, by the number given
  const handleHPChange = (id: string, num: number) => {
    console.log("Change hp of character with id: ", id, "by: ", num);
    let list = characterList.slice();
    const current = getCharacterIndexByID(id);
    list[current].hpValue = list[current].hpValue + num;
    if (list[current].hpValue < 0) {
      list[current].hpValue = 0;
    }
    if (list[current].hpValue > list[current].maxHP) {
      list[current].hpValue = list[current].maxHP;
    }
    setCharacterList(list);
  };

  //change the init value of the specified character, based on the id given, to the number given
  const handleInitChange = (id: string, num: number) => {
    console.log("Change init of character with id: ", id, "to: ", num);
    let list = characterList.slice();
    const current = getCharacterIndexByID(id);
    let newInit = num;
    if (isNaN(newInit)) {
      newInit = 0;
    }
    list[current].initValue = newInit;
    console.log(list);
    setCharacterList(list);
  };

  //add a character to the array
  const handleAddCharacter = (
    newName: string,
    hp: number,
    init: number,
    ally: boolean
  ) => {
    let list = addCharacter(newName, hp, init, ally, characterList.slice());
    setCharacterList(list);
  };

  //removes a character from the array given the characters id
  const removeCharacter = (id: string) => {
    console.log("Remove", id);
    const list = characterList.slice();
    const current = getCharacterIndexByID(id);
    list.splice(current, 1);
    setCharacterList(list);
  };

  const getCharacterIndexByID = (id: string) => {
    return characterList.findIndex(
      (character: Character) => character.id === id
    );
  };

  const clearList = () => {
    setCharacterList([]);
  };

  return (
    <>
      <div className="header">
        <h1>Bob's Adventure Tracker</h1>
        <h2>For TTRPG Party and Combat tracking</h2>
      </div>
      <div className="tracker">
        <div className="party">
          <PartyTracker
            characters={characterList.slice()}
            handleRemove={removeCharacter}
            handleHPChange={handleHPChange}
            handleInitChange={handleInitChange}
          />
          <HeroAdder addCharacter={handleAddCharacter} />
        </div>
        <div className="combat">
          <CombatTracker
            characters={characterList.slice()}
            handleRemove={removeCharacter}
          />
          <EnemyAdder addCharacter={handleAddCharacter} />
        </div>
      </div>
      <button className="clear" onClick={clearList}>
        Clear all Characters
      </button>
    </>
  );
}

export default CharacterTracker;

//returns the characterList from local storage, returns an empty array if there is nothing stored
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("characterListKey");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch {
    return [];
  }
}
