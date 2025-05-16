import AbstractUnit from "../AbstractUnit.js";

export default class SmallWagon extends AbstractUnit {
    constructor() {
        super();
        this.name = "Petit Chariot";
        this.description = "Permet de transporter une petite quantité de ressources entre les villes.";
        this.initialCost = {
            gold: 2000,
            wood: 2000,
            stone: 0
        };
        this.initialTimeToTrain = 720;
    }
}
