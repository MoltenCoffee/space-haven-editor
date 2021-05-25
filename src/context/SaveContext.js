import { createContext, useReducer, useState } from "react";

import { fileSave } from "browser-fs-access";

import readXmlFile from "../lib/readXmlFile";
import writeXmlFile from "../lib/writeXmlFile";
import parseGameData from "../lib/parseGameData";
import rewriteGameData from "../lib/rewriteGameData";

export const SaveContext = createContext(null);

const initGameData = () => {
  return {};
};

const gameReducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "insert":
      return action.state;
    case "reset":
      return initGameData({});
    case "plusResearch":
      newState.research.states[action.id].blocksDone._attributes[action.level] =
        parseInt(
          state.research.states[action.id].blocksDone._attributes[action.level],
          10,
        ) + 1;
      break;
    case "minusResearch":
      newState.research.states[action.id].blocksDone._attributes[action.level] =
        parseInt(
          state.research.states[action.id].blocksDone._attributes[action.level],
          10,
        ) + 1;
      break;
    case "setResearch":
      newState.research.states[action.id].blocksDone._attributes[action.level] =
        action.value;
      break;
    case "setCredits":
      newState.bank.credits = action.value;
      break;
    case "setShipName":
      {
        const shipIndex = newState.ships.findIndex(
          (ship) => (ship.name = action.name),
        );
        if (shipIndex >= 0) {
          newState.ships[shipIndex].name = action.value;
        }
      }
      break;
    case "setSuited":
      {
        const shipIndex = newState.ships.findIndex(
          (ship) => (ship.name = action.ship),
        );
        const charIndex = newState.ships[shipIndex]?.characters.findIndex(
          (char) => char._attributes.name === action.name,
        );

        if (shipIndex >= 0 && charIndex >= 0) {
          if (action.value) {
            newState.ships[shipIndex].characters[charIndex]._attributes.is =
              "1";
          } else {
            delete newState.ships[shipIndex].characters[charIndex]._attributes
              .is;
          }
        }
      }
      break;
    default:
      return null;
  }

  return newState;
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
      console.log(gameFile.handle);
      const data = await readXmlFile(gameFile);
      if (process.env.NODE_ENV === "development") {
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

    //const handle = saveData.find((item) => item.name === "game").handle;
    const handle = saveData.handle;

    console.log(file);
    await fileSave(file, { fileName: "game" }, handle);
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
      }}
    >
      {children}
    </SaveContext.Provider>
  );
};

export default SaveProvider;
