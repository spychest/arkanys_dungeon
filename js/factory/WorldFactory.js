import World from '../entity/world.js';
import Continent from '../entity/continent.js';
import Country from '../entity/country.js';
import City from '../entity/city.js';

const COUNTRY_CITIES_LIMIT = 15;

export class WorldFactory {
    static createWorld(name, numberOfContinents = 5, numberOfCountriesByContinent = 20, worldSpeedFactor = 1) {
        const world = new World(name, numberOfContinents, numberOfCountriesByContinent, worldSpeedFactor);
        for (let i = 0; i < numberOfContinents; i++) {
            const continent = new Continent(i + 1);
            for (let j = 0; j < numberOfCountriesByContinent; j++) {
                const country = new Country(j + 1);
                for (let k = 0; k < COUNTRY_CITIES_LIMIT; k++) {
                    const city = new City(k + 1, `City ${k + 1}`, false);
                    country.addCity(city);
                }
                continent.addCountry(country);
            }
            world.addContinent(continent);
        }
        return world;
    }
}