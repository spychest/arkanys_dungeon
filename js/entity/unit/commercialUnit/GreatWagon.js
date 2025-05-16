import AbstractUnit from "../AbstractUnit.js";

export default class GreatWagon extends AbstractUnit {
    constructor() {
        super();
        this.name = "Grand Chariot";
        this.description = "Permet de transporter une grande quantité de ressources entre les villes.";
        this.initialCost = {
            gold: 6000,
            wood: 6000,
            stone: 0
        };
        this.initialTimeToTrain = 2160;
    }
}
