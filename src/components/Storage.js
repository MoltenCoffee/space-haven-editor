import Card from "./Card";
import elements from "../data/elements";

const Storage = ({ inventory, rules, eatAllowed }) => {
  return (
    <Card>
      <label>
        <input type="checkbox" checked={!!parseInt(eatAllowed)} />
        <span>Direct eat allowed</span>
      </label>
      {(!inventory || inventory.length === 0) && <div>Emtpy</div>}
      {Array.isArray(inventory) &&
        inventory?.map((item) => (
          <div>
            {elements[item._attributes?.elementaryId] || "Unknown"}:
            {item._attributes?.inStorage}
          </div>
        ))}
    </Card>
  );
};

export default Storage;
