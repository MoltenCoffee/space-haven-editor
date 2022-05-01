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
        let newTiles = [... newState.ships[shipIndex].tiles];
        newTiles = newTiles.map(tile => {
          let newTile = parse(tile, action.value);
          return newTile;
        });
        newState.ships[shipIndex].tiles = newTiles;
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

const parse = (obj, dir) => {
  let children = Object.keys(obj);
  // let ret = {...obj};

  children.forEach(child => {
    if (child == '_attributes') {
      if (obj._attributes?.sh != "61504" && // not border
      Object.prototype.hasOwnProperty.call(obj._attributes, 'x')) { // has position
        switch (dir) {
          case 'left':  obj._attributes.x = '' + (parseInt(obj._attributes.x) - 1); break;
          case 'right': obj._attributes.x = '' + (parseInt(obj._attributes.x) + 1); break;
          case 'up':    obj._attributes.y = '' + (parseInt(obj._attributes.y) + 1); break;
          case 'down':  obj._attributes.y = '' + (parseInt(obj._attributes.y) - 1); break;
        }
      }
    } else {
      obj[child] = parse(obj[child], dir);
    }
  });

  return obj;
}

export default SaveProvider;
