import AbstractUnit from "../AbstractUnit.js";

export default class Warlock extends AbstractUnit {
    constructor() {
        super();
        this.name = "Démoniste";
        this.description = "Maître des ténèbres, invoque des créatures et lance des malédictions.";
        this.initialCost = {
            gold: 60000,
            wood: 50000,
            stone: 15000
        };
        this.initialTimeToTrain = 19800;
    }
}
