export default class World {
    constructor(name, numberOfContinents = 5, numberOfCountriesByContinent = 20, speedFactor = 1) {
        this.name = name;
        this.speedFactor = speedFactor;
        this.numberOfContinents = numberOfContinents;
        this.numberOfCountriesByContinent = numberOfCountriesByContinent;
        this.continents = [];
    }

    addContinent(continent) {
        this.continents.push(continent);
    }

    getContinents() {
        return this.continents;
    }
}