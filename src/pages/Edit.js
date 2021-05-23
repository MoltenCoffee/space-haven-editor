import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import Page from "../components/Page";
import { SaveContext } from "../context/SaveContext";

const Edit = () => {
  const { gameData, editGameData } = useContext(SaveContext);
  const { bank } = gameData;
  return (
    <Page>
      <h2>
        <FormattedMessage
          id="welcome_comm"
          defaultMessage="Welcome commander!"
        />
      </h2>
      <div>
        <label>
          <span>Credits:</span>
          <input
            type="number"
            value={bank.credits}
            onChange={(e) => {
              editGameData({ type: "setCredits", value: e.target.value });
            }}
          />
        </label>
      </div>
    </Page>
  );
};

export default Edit;
