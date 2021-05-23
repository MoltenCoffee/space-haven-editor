const rewriteGameData = (file, data) => {
  if (!data.ships || !data.crafts || !data.research || !data.bank) {
    return null;
  }

  const output = JSON.parse(JSON.stringify(file));

  output.game.ships.ship.forEach((ship) => {
    const edited = data.ships.find((item) => {
      return item.id === ship._attributes.sid;
    });

    ship._attributes.sname = edited.name;

    ship.characters.c = edited.characters;
    // ship.monsters.c = edited.monsters;
    // ship.robots.c = edited.robots;
  });

  output.game.crafts.c.forEach((craft) => {
    const edited = data.crafts.find((item) => {
      return item.id === craft._attributes.id;
    });

    if (craft._attributes.cname) {
      craft._attributes.cname = edited.name;
    }
    if (craft.characters) {
      craft.characters.c = edited.characters;
    }
    // if (craft.robots) {
    //   craft.robots.c = edited.robots;
    // }
  });

  output.game.research.states.l.forEach((res) => {
    const edited = data.research.states[res._attributes.techId];

    res = edited;
  });

  output.game.research._attributes.activeResearchId = data.research.active;
  output.game.research._attributes.treeId = data.research.tree;

  output.game.playerBank._attributes.ca = data.bank.credits;

  return output;
};

export default rewriteGameData;
