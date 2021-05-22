import { useContext, useEffect } from "react";
import Page from "../components/Page";
import { SaveContext } from "../context/SaveContext";

const Edit = () => {
  const { gameData } = useContext(SaveContext);

  useEffect(() => {
    if (gameData) {
      console.log(gameData);
    }
  }, [gameData]);

  return (
    <Page>
      <p>{JSON.stringify(gameData)}</p>
    </Page>
  );
};

export default Edit;
