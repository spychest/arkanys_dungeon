import AbstractUnit from "../AbstractUnit.js";

export default class Blacksmith extends AbstractUnit {
    constructor() {
        super();
        this.name = "Forgeron";
        this.description = "Permet d'améliorer l'équipement des unités et de réparer les machines.";
        this.initialCost = {
            gold: 10000,
            wood: 6000,
            stone: 2000
        };
        this.initialTimeToTrain = 2880;
    }
}
