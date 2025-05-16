import AbstractUnit from "../AbstractUnit.js";

export default class Barbarian extends AbstractUnit {
    constructor() {
        super();
        this.name = "Barbare";
        this.description = "Guerrier féroce, puissant au corps à corps.";
        this.initialCost = {
            gold: 6000,
            wood: 4000,
            stone: 0
        };
        this.initialTimeToTrain = 1800;
    }
}
