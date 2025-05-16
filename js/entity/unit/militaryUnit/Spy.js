import AbstractUnit from "../AbstractUnit.js";

export default class Spy extends AbstractUnit {
    constructor() {
        super();
        this.name = "Espion";
        this.description = "Unité d'espionnage qui peut infiltrer les bâtiments ennemis et vous faire un rapport.";
        this.initialCost = {
            gold: 0,
            wood: 1000,
            stone: 0
        };
        this.initialTimeToTrain = 180;
    }
}