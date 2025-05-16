import Barack from "./entity/building/military/Barack.js";
import GoldMine from "./entity/building/production/GoldMine.js";
import GoldStorage from "./entity/building/resources/GoldStorage.js";


let barack = new Barack();
console.log(barack.getNextLevelCost());
console.log(barack.getTimeToUpgrade());
barack.setLevel(1);
console.log(barack.getNextLevelCost());
console.log(barack.getTimeToUpgrade(2,0,1));

let goldMine = new GoldMine();
console.log(goldMine.getNextLevelCost());
console.log(goldMine.getTimeToUpgrade());
goldMine.setLevel(1);
console.log(goldMine.getNextLevelCost());
console.log(goldMine.getTimeToUpgrade(2,0,1));

let goldStorage = new GoldStorage();
console.log(goldStorage.getNextLevelCost());
console.log(goldStorage.getTimeToUpgrade());
goldStorage.setLevel(1);
console.log(goldStorage.getNextLevelCost());
console.log(goldStorage.getTimeToUpgrade(2,0,1));