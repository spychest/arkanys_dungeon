export default class AbstractStorageBuilding {
    constructor() {
        this.level = 0;
        this.initialCost = {
            gold: 0,
            wood: 0,
        };
        this.initialTimeToUpgrade = 10;
    }

    setLevel(level) {
        this.level = level;
    }

    getNextLevelResourcesNeeded() {
        return {
            gold: Math.floor(this.initialCost.gold * Math.pow(2, this.level)),
            wood: Math.floor(this.initialCost.wood * Math.pow(2, this.level)),
        };
    }

    getStorage() {
        return Math.floor(10000*Math.pow(2, this.level));
    }

    getTimeNeededToUpgrade(dwarfsKnowledgeLevel = 0, elvenKnowledgeLevel = 0, worldSpeedFactor = 1) {
        let timeInSeconds = Math.floor(((this.getNextLevelResourcesNeeded().gold + this.getNextLevelResourcesNeeded().wood))/(100*(1 + dwarfsKnowledgeLevel)*Math.pow(2, elvenKnowledgeLevel)*worldSpeedFactor));
        return timeInSeconds > 0 ? timeInSeconds : this.initialTimeToUpgrade;
    }

}