import Page from "../components/Page";
import RefCard from "../components/RefCard";
import Heading from "../components/Heading";

import research from "../data/research";
import elements from "../data/elements";
import conditions from "../data/conditions";
import skills from "../data/skills";
import attributes from "../data/attributes";
import traits from "../data/traits";
import crafts from "../data/crafts";
import crops from "../data/crops";

const Reference = () => {
  return (
    <Page>
      <Heading level={2}>References</Heading>
      <div style={{ display: "flex", wrap: "wrap", alignItems: "flex-start" }}>
        <RefCard title="Research" data={research[2535]} />
        <RefCard title="Elements" data={elements} />
        <RefCard title="Conditions" data={conditions} />
        <RefCard title="Skills" data={skills} />
        <RefCard title="Attributes" data={attributes} />
        <RefCard title="Traits" data={traits} />
        <RefCard title="Crafts" data={crafts} />
        <RefCard title="Crops" data={crops} />
      </div>
    </Page>
  );
};

export default Reference;
