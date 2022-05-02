import Ship from "./Ship";

class SaveState {
  #saveData: any;

  credits: number;
  ships: Ship[];

  constructor(saveData: any) {
    this.#saveData = saveData.game;

    this.credits = this.#saveData.playerBank._attributes.ca;
    this.ships = this.#saveData.ships.ship.map(
      (shipData: any) => new Ship(shipData),
    );
  }

  toJSON() {}
}

export default SaveState;
