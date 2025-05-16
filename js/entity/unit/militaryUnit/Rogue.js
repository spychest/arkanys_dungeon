import AbstractUnit from "../AbstractUnit.js";

export default class Rogue extends AbstractUnit {
    constructor() {
        super();
        this.name = "Voleur";
        this.description = "Unité furtive, efficace pour les attaques surprises et le pillage.";
        this.initialCost = {
            gold: 30000,
            wood: 40000,
            stone: 15000
        };
        this.initialTimeToTrain = 12600;
    }
}
