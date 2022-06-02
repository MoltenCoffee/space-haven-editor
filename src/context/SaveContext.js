import { createContext, useReducer, useState } from "react";
import clone from "rfdc";
import { fileSave } from "browser-fs-access";

import readXmlFile from "../lib/readXmlFile";
import writeXmlFile from "../lib/writeXmlFile";
import parseGameData from "../lib/parseGameData";
import rewriteGameData from "../lib/rewriteGameData";

export const SaveContext = createContext(null);

const initGameData = () => {
  return {};
};

const getShipIndex = (state, id) => {
  return state.ships.findIndex((ship) => ship.id === id);
};

const getCharacterIndex = (state, shipIndex, id) => {
  return state.ships[shipIndex]?.characters.findIndex(
    (char) => char._attributes.name === id || char._attributes.entId === id,
  );
};

const getStorageIndex = (state, shipIndex, x, y) => {
  return state.ships[shipIndex]?.tiles.findIndex(
    (e) => e.l && e._attributes.x === x && e._attributes.y === y,
  );
};

const getStorageItemIndex = (state, shipIndex, storageIndex, element) => {
  return state.ships[shipIndex]?.tiles[storageIndex].l[3].feat.inv.s.findIndex(
    (l) => l._attributes.elementaryId === element,
  );
};

const getResearchIndex = (state, id) =>
  state.research.states.findIndex((res) => res._attributes.techId === id);

const gameReducer = (state, action) => {
  const newState = clone({ proto: false })(state);

  const actions = {
    insert: () => action.state,
    reset: () => initGameData({}),
    plusResearch: () => {
      const resIndex = getResearchIndex(newState, action.id);
      newState.research.states[resIndex].blocksDone._attributes[action.level] =
        parseInt(
          newState.research.states[resIndex].blocksDone._attributes[
            action.level
          ],
          10,
        ) + 1;
      return newState;
    },
    minusResearch: () => {
      newState.research.states[action.index].blocksDone._attributes[
        action.level
      ] =
        parseInt(
          newState.research.states[action.index].blocksDone._attributes[
            action.level
          ],
          10,
        ) + 1;
      return newState;
    },
    setResearch: () => {
      newState.research.states[action.id].blocksDone._attributes[action.level] =
        action.value;
      return newState;
    },
    setCredits: () => {
      newState.bank.credits = action.value;
      return newState;
    },
    setShipName: () => {
      const shipIndex = newState.ships.findIndex(
        (ship) => ship.name === action.name,
      );
      if (shipIndex >= 0) {
        newState.ships[shipIndex].name = action.value;
      }
      return newState;
    },
    setSuited: () => {
      const shipIndex = getShipIndex(newState, action.ship);
      const charIndex = getCharacterIndex(newState, shipIndex, action.name);

      if (shipIndex >= 0 && charIndex >= 0) {
        if (action.value) {
          newState.ships[shipIndex].characters[charIndex]._attributes.is = "1";
        } else if (
          newState.ships[shipIndex].characters[charIndex]._attributes.is
        ) {
          delete newState.ships[shipIndex].characters[charIndex]._attributes.is;
        }
        return newState;
      }
    },
    removeCondition: () => {
      const shipIndex = getShipIndex(newState, action.ship);
      const charIndex = getCharacterIndex(newState, shipIndex, action.name);
      const condIndex = newState.ships[shipIndex]?.characters[
        charIndex
      ].pers.conditions.c.findIndex(
        (cond) => cond._attributes.id === action.condition,
      );

      if (shipIndex >= 0 && charIndex >= 0 && condIndex >= 0) {
        newState.ships[shipIndex]?.characters[
          charIndex
        ].pers.conditions.c.splice(condIndex, 1);

        return newState;
      }
    },
    setStorageElement: () => {
      const shipIndex = getShipIndex(newState, action.ship);
      const storageIndex = getStorageIndex(
        newState,
        shipIndex,
        action.x,
        action.y,
      );
      const itemIndex = getStorageItemIndex(
        newState,
        shipIndex,
        storageIndex,
        action.element,
      );
      if (shipIndex >= 0 && storageIndex >= 0 && itemIndex >= 0) {
        newState.ships[shipIndex].tiles[storageIndex].l[3].feat.inv.s[itemIndex]._attributes.inStorage =
          action.count;
      }
      return newState;
    },
    nudge: () => {
      const shipIndex = newState.ships.findIndex(
        (ship) => ship.name === action.ship,
      );
      if (shipIndex >= 0) {
        let thisShip = newState.ships[shipIndex];

        let newTiles = [... thisShip.tiles],
          newRoof = [... thisShip.roof],
          newChars = [... thisShip.characters],
          newRobots = thisShip.robots ? [... thisShip.robots] : [],
          newItems = thisShip.items ? [... thisShip.items] : [];

        // base (hull, buildings)
        newTiles = newTiles.map(tile => {
          let newTile = parse(tile, action.value);
          return newTile;
        });
        newState.ships[shipIndex].tiles = newTiles;

        // roof
        newRoof = newRoof.map(roof => {
          let roofTile = parse(roof, action.value);
          return roofTile;
        });
        newState.ships[shipIndex].roof = newRoof;

        // items, if any
        if (newItems) {
          newItems = newItems.map(item => {
            let newItem = parse(item, action.value);
            return newItem;
          });
          newState.ships[shipIndex].items = newItems;
        }

        // characters
        newChars = newChars.map(char => {
          let newChar = parse(char, action.value);
          return newChar;
        });
        newState.ships[shipIndex].characters = newChars;

        // robots
        newRobots = newRobots.map(bot => {
          let newBot = parse(bot, action.value);
          return newBot;
        });
        newState.ships[shipIndex].robots = newRobots;
      }
      return newState;
    },
  };

  if (!actions[action.type]) {
    throw new Error("No such action in editGameData reducer");
  }

  return actions[action.type]();
};

const SaveProvider = ({ children }) => {
  const [saveData, setSaveData] = useState(null);
  const [gameFile, setGameFile] = useState(null);
  const [gameData, editGameData] = useReducer(gameReducer, {}, initGameData);

  const insertSaveData = async (blobs) => {
    setSaveData(blobs);
    // const gameFile = blobs.find((item) => item.name === "game");
    const gameFile = blobs;

    if (gameFile) {
      const data = await readXmlFile(gameFile);
      if (process.env.NODE_ENV === "development") {
        console.log("This appears only in development.\nDebug data:");
        console.log(data);
      }
      setGameFile(data);
      editGameData({ type: "insert", state: parseGameData(data) });
    }
  };

  const retrieveGameData = async () => {
    const newData = rewriteGameData(gameFile, gameData);
    const newXml = await writeXmlFile(newData);
    const file = new File([newXml], "game");
    const handle = saveData.handle;
    await fileSave(file, { fileName: "game" }, handle);
  };

  const reset = () => {
    setSaveData(null);
    setGameFile(null);
    editGameData({ type: "reset" });
  };

  return (
    <SaveContext.Provider
      value={{
        gameData,
        editGameData,
        gameFile,
        saveData,
        insertSaveData,
        retrieveGameData,
        reset,
      }}
    >
      {children}
    </SaveContext.Provider>
  );
};

const parse = (obj, dir, skip = false) => {
  let skipList = []; // array of elements to skip
  let children = Object.keys(obj);

  children.forEach(child => {
    if (skipList.indexOf(child) !== -1) { // skip certain elements
      obj[child] = parse(obj[child], dir, true);
    } else if (child == '_attributes') {
      if (obj._attributes?.sh !== "61504" && !skip) {
        if (Object.prototype.hasOwnProperty.call(obj._attributes, 'x')) { // has x,y position
          if (obj._attributes.x.indexOf('.') > 0 || obj._attributes.y.indexOf('.') > 0) { // floats for item position
            switch (dir) {
              case 'left':  obj._attributes.x = '' + (parseFloat(obj._attributes.x).toFixed(2) - 1); break;
              case 'right': obj._attributes.x = '' + (parseFloat(obj._attributes.x).toFixed(2) + 1); break;
              case 'up':    obj._attributes.y = '' + (parseFloat(obj._attributes.y).toFixed(2) + 1); break;
              case 'down':  obj._attributes.y = '' + (parseFloat(obj._attributes.y).toFixed(2) - 1); break;
            }
          } else {
            switch (dir) {
              case 'left':  obj._attributes.x = '' + (parseInt(obj._attributes.x) - 1); break;
              case 'right': obj._attributes.x = '' + (parseInt(obj._attributes.x) + 1); break;
              case 'up':    obj._attributes.y = '' + (parseInt(obj._attributes.y) + 1); break;
              case 'down':  obj._attributes.y = '' + (parseInt(obj._attributes.y) - 1); break;
            }
          }
        }
      }
    } else {
      obj[child] = parse(obj[child], dir);
    }
  });

  return obj;
}

export default SaveProvider;
