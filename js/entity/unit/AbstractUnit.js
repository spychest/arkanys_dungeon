export default class AbstractUnit {
    constructor() {
        this.name = '';
        this.description = '';
        this.initialCost = {
            gold: 0,
            wood: 0,
            stone: 0
        };
        this.initialTimeToTrain = 0;
    }
    getTotalGoldAndWoodCostForNextLevel() {
        return this.initialCost.gold + this.initialCost.wood;
    }

    getSpeedFactor(barrackLevel, elvenKnowledgeLevel, worldSpeedFactor) {
        return 25*(1 + barrackLevel)*Math.pow(2, elvenKnowledgeLevel)*worldSpeedFactor;
    }

    getTimeToTrain( barrackLevel = 0, elvenKnowledgeLevel = 0, worldSpeedFactor = 1) {
        let timeInSeconds = Math.floor(this.getTotalGoldAndWoodCostForNextLevel()/this.getSpeedFactor(barrackLevel, elvenKnowledgeLevel, worldSpeedFactor));
        return timeInSeconds > 0 ? timeInSeconds : 1;
    }
}