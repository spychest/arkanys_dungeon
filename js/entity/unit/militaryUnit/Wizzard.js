import AbstractUnit from "../AbstractUnit.js";

export default class Wizzard extends AbstractUnit {
    constructor() {
        super();
        this.name = "Sorcier";
        this.description = "Maître des arcanes, inflige de lourds dégâts magiques.";
        this.initialCost = {
            gold: 50000,
            wood: 50000,
            stone: 30000
        };
        this.initialTimeToTrain = 13500;
    }
}
