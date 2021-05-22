import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Upload from "../components/Upload";
import Page from "../components/Page";
import { SaveContext } from "../context/SaveContext";

const Home = () => {
  const { saveData, gameData } = useContext(SaveContext);

  return gameData ? (
    <Navigate to="/edit" />
  ) : (
    <Page>
      {saveData ? (
        <p>Loading...</p>
      ) : (
        <>
          <FormattedMessage id="TestMessage" defaultMessage="Hello" />
          <Upload />
        </>
      )}
    </Page>
  );
};

export default Home;
