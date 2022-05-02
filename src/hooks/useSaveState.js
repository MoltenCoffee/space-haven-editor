import { useCallback, useState, useReducer, useRef, useMemo } from "react";
import { fileSave } from "browser-fs-access";
import { useWorker } from "@koale/useworker";

import readXmlFile from "../lib/readXmlFile";
import writeXmlFile from "../lib/writeXmlFile";
import gameDataReducer from "../lib/gameDataReducer";
import saveStateExtractor from "../lib/saveStateExtractor";
import saveStateReducer from "../lib/gameDataReducer";

const useSaveState = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleRef = useRef(null);
  const [gameData, doWithGameData] = useReducer(gameDataReducer, {});
  const [extractedData, doWithExtractedData] = useReducer(saveStateReducer, {});
  const [extractDataWorker] = useWorker(saveStateExtractor);

  const onUpload = useCallback((blobs) => {
    if (!blobs) {
      setError(true);
    }
    handleRef.current = blobs.handle;
    readXmlFile(blobs).then((data) => {
      doWithGameData({ type: "insert", payload: data });
      extractDataWorker(data)
        .then((extractedData) => {
          doWithExtractedData({ type: "insert", payload: extractedData });
          setIsLoading(false);
        })
        .catch((err) => {});
    });
  }, [extractDataWorker]);

  const onDownload = useCallback(() => {
    const updatedData = {};
    writeXmlFile(updatedData)
      .then((xml) =>
        fileSave(
          new File([xml], "game"),
          { fileName: "game" },
          handleRef.current,
        ),
      )
      .then((res) => {})
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  const onReset = useCallback(() => {
    doWithGameData("reset");
    handleRef.current = null;
    setError(null);
  }, []);

  const getData = (type) => {
    const date = saveStateExtractor(gameData, type);
  };

  return useMemo(
    () => ({
      isLoading,
      error,
      onDownload,
      onUpload,
      onReset,
      gameData,
    }),
    [isLoading, error, gameData, onDownload, onUpload, onReset],
  );
};

export default useSaveState;
