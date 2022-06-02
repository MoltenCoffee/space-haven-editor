const parseGameData = (data) => {
  if (!data?.game?.ships) {
    return null;
  }

  const {
    game: { ships, crafts, research, playerBank },
  } = data;
  const output = {};

  if (ships?.ship) {
    output.ships = ships.ship.map((ship) => {
      const shipObject = {};
      shipObject.name = ship._attributes.sname;
      shipObject.id = ship._attributes.sid;
      shipObject.tiles = ship.e;
      shipObject.roof = ship.roof.e;
      shipObject.dimensions = {
        x: parseInt(ship._attributes.sx, 10),
        y: parseInt(ship._attributes.sy, 10),
      };
      shipObject.characters = ship.characters?.c || [];
      shipObject.monsters = ship.characters?.m || [];
      shipObject.robots = ship.robots?.m || [];
      shipObject.items = ship.items?.i || [];
      
      return shipObject;
    });
  }

  if (crafts?.c) {
    output.crafts = crafts.c.map((craft) => {
      const craftObject = {};

      craftObject.id = craft._attributes.id;
      craftObject.name = craft._attributes.cname || null;
      craftObject.characters = craft.characters?.c || [];
      craftObject.robots = craft.robots?.m || [];

      return craftObject;
    });
  }

  if (research?.states?.l) {
    output.research = {
      states: research.states.l,
      tree: research._attributes?.treeId,
      active: research._attributes?.activeResearchId,
    };
  }

  output.bank = { credits: playerBank?._attributes?.ca };

  return output;
};

export default parseGameData;
