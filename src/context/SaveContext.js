import { createContext, useEffect, useState } from "react";
import readXmlFile from "../lib/readXmlFile";

export const SaveContext = createContext(null);

const SaveProvider = ({ children }) => {
  const [saveData, setSaveData] = useState(null);
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    if (!saveData) {
      return;
    }

    const retrieveGameData = async () => {
      const gameFile = saveData.find((item) => item.name === "game");

      if (gameFile) {
        const { game } = await readXmlFile(gameFile);
        setGameData(game);
      }
    };

    retrieveGameData();
  }, [saveData]);

  return (
    <SaveContext.Provider value={{ gameData, saveData, setSaveData }}>
      {children}
    </SaveContext.Provider>
  );
};

export default SaveProvider;
