import { v4 as uuid } from "uuid";
import { Character } from "../components/characterTracker";

export default function addCharacter(
  newName: string,
  hp: number,
  init: number,
  ally: boolean,
  list: Character[]
) {
  if (!newName || !hp || !init) return;
  if (newName === "" || !Number.isInteger(hp) || !Number.isInteger(init)) {
    return; //TODO add a popup that explains the issue
  }
  console.log("Add new Character");

  if (ally) {
    list = list.concat({
      id: uuid(),
      name: newName,
      hpValue: hp,
      maxHP: hp,
      initValue: init,
      ally: ally,
    });
  } else {
    for (let i = 0; i < hp; i++) {
      let enemyNumber = i + 1;
      let enemyName = newName + enemyNumber;
      list = list.concat({
        id: uuid(),
        name: enemyName,
        hpValue: 1,
        maxHP: 1,
        initValue: init,
        ally: ally,
      });
    }
  }
  return list;
}
