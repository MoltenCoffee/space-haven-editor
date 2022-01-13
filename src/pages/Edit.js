import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Download } from "lucide-react";
import Page from "../components/Page";
import Button from "../components/Button";
import { SaveContext } from "../context/SaveContext";

const Edit = () => {
  const { gameData, editGameData, retrieveGameData } = useContext(SaveContext);
  const { bank } = gameData;

  console.log("Hello")

  return (
    <Page>
      <h2>
        <FormattedMessage
          id="welcome_comm"
          defaultMessage="Welcome commander!"
        />
      </h2>
      <div>
        <p>
          <FormattedMessage
            id="edit_expl"
            defaultMessage="Edit what you want, and return here to download the file again"
          />
        </p>
        <Button
          onClick={(e) => {
            e.preventDefault();
            retrieveGameData();
          }}
          style={{ fontSize: "120%" }}
        >
          <Download />
          <span>
            &nbsp;
            <FormattedMessage id="download" defaultMessage="Download" />
          </span>
        </Button>
      </div>
      <div>
        <h3>
          <FormattedMessage id="general_edits" defaultMessage="General edits" />
        </h3>
        <label>
          <span>
            <FormattedMessage id="credits_monetary" defaultMessage="Credits" />:
          </span>
          <input
            type="number"
            value={parseInt(bank.credits, 10)}
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
