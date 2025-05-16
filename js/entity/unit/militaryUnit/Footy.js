import AbstractUnit from "../AbstractUnit.js";

export default class Footy extends AbstractUnit {
    constructor() {
        super();
        this.name = "Fantassin";
        this.description = "Unité d'infanterie de base, efficace en grand nombre.";
        this.initialCost = {
            gold: 3000,
            wood: 1000,
            stone: 0
        };
        this.initialTimeToTrain = 720;
    }
}
