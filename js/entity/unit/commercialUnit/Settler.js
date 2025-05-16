import AbstractUnit from "../AbstractUnit.js";

export default class Settler extends AbstractUnit {
    constructor() {
        super();
        this.name = "Colon";
        this.description = "Permet de fonder de nouvelles colonies sur la carte du monde.";
        this.initialCost = {
            gold: 10000,
            wood: 20000,
            stone: 10000
        };
        this.initialTimeToTrain = 5400;
    }
}
