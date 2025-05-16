import AbstractUnit from "../AbstractUnit.js";

export default class Dragon extends AbstractUnit {
    constructor() {
        super();
        this.name = "Dragon";
        this.description = "Créature légendaire, possède une puissance destructrice et une grande résistance.";
        this.initialCost = {
            gold: 5000000,
            wood: 4000000,
            stone: 1000000
        };
        this.initialTimeToTrain = 1555200;
    }
}
