import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { SaveContext } from "../context/SaveContext";

import Upload from "../components/Upload";
import Page from "../components/Page";
import Card from "../components/Card";
import Button from "../components/Button";
import ButtonBar from "../components/ButtonBar";

const Home = () => {
  const { saveData, gameData } = useContext(SaveContext);

  return gameData.ships ? (
    <Navigate to="/edit" />
  ) : (
    <Page center>
      <Card style={{ maxWidth: "25rem" }}>
        <h2>
          <FormattedMessage id="welcome" defaultMessage="Welcome!" />
        </h2>
        <p>
          The first online savegame editor for the game Space Haven by Bugbyte.
        </p>
        <p>
          This website is still under development, but feel free to look around
          and try it out.
          <br />
          <b>Always</b> backup your saves!
          <br />
          <br />
          Compatible with versions 0.12.2 and 0.12.3. Other versions
          haven&apos;t been tested.
        </p>
        <h3>
          <FormattedMessage
            id="view_references"
            defaultMessage="View reference charts"
          />
        </h3>
        <p>
          If you want to edit your saves manually, the reference charts with
          ID&apos;s and corresponding objects, tech, conditions and more might
          be useful.
        </p>
        <Button to="/reference">References</Button>
        <h3>
          <FormattedMessage
            id="upload_file"
            defaultMessage="Upload save file"
          />
        </h3>
        {!saveData ? (
          <>
            <p>
              Select the save file:
              <br />
              <i>-install location-/savegames/-save name-/-save folder-/game</i>
              <br />
              <br />
              The install location can be found by right-clicking the game in
              your steam library, &lsquo;manage&rsquo; &gt; &lsquo;browse local
              files&rsquo;.
              <br />
              <br />
              The save folder is either &lsquo;save&rsquo; or
              &lsquo;autosaveX&rsquo;
            </p>
            <p>This app works best (by a small margin) in Chrome</p>
            <Upload />
          </>
        ) : (
          <p>
            <FormattedMessage id="loading_dots" defaultMessage="Loading..." />
          </p>
        )}
        <h3>
          <FormattedMessage id="disclaimer" defaultMessage="Disclaimer" />
        </h3>
        <p>
          This app is not endorsed or supported by BugByte or Space Haven in any
          way. Be sure to follow them:
        </p>
        <ButtonBar>
          <Button href="https://store.steampowered.com/app/979110/Space_Haven/">
            Steam
          </Button>
          <Button href="https://www.gog.com/game/space_haven">GOG</Button>
          <Button href="https://bugbyte.fi/">BugByte</Button>
          <Button href="https://bugbyte.fi/spacehaven/">Space Haven</Button>
        </ButtonBar>
      </Card>
    </Page>
  );
};

export default Home;
