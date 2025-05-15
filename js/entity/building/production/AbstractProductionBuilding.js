export default class AbstractProductionBuilding {
    constructor() {
        this.level = 0;
        this.initialCost = {
            gold: 0,
            wood: 0,
            upgradeFactor: 0
        };
        this.initialTimeToUpgrade = 1;
    }
    getLevel() {
        return this.level;
    }
    setLevel(level) {
        this.level = level;
    }
    getNextLevelCost() {
        return {
            gold: Math.floor(this.initialCost.gold * (Math.pow(this.initialCost.upgradeFactor, this.level+1) - Math.pow(this.initialCost.upgradeFactor, this.level)) / (this.initialCost.upgradeFactor - 1)),
            wood: Math.floor(this.initialCost.wood * (Math.pow(this.initialCost.upgradeFactor, this.level+1) - Math.pow(this.initialCost.upgradeFactor, this.level)) / (this.initialCost.upgradeFactor - 1)),
        }
    }
    getTotalGoldAndWoodCostForNextLevel() {
        return this.getNextLevelCost().gold + this.getNextLevelCost().wood;
    }

    getSpeedFactor(dwarfsKnowledgeLevel, elvenKnowledgeLevel, worldSpeedFactor) {
        return 25*(1 + dwarfsKnowledgeLevel)*Math.pow(2, elvenKnowledgeLevel)*worldSpeedFactor;
    }

    getTimeToUpgrade(dwarfsKnowledgeLevel = 0, elvenKnowledgeLevel = 0, worldSpeedFactor = 1) {
        let timeInSeconds = Math.floor(this.getTotalGoldAndWoodCostForNextLevel()/this.getSpeedFactor(dwarfsKnowledgeLevel, elvenKnowledgeLevel, worldSpeedFactor));
        return timeInSeconds > 0 ? timeInSeconds : 1;
    }
}