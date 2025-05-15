export default class Country {
    constructor(number, cities = []){
        this.number = number,
        this.cities = cities;
    }
    addCity(city) {
        this.cities.push(city);
    }
    setCities(cities) {
        this.cities = cities;
    }
    getCities() {
        return this.cities;
    }
}