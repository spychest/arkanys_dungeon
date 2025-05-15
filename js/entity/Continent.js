export default class Continent {
    constructor(number, countries = []) {
        this.number = number;
        this.countries = countries;
    }
    setCountries(countries) {
        this.countries = countries;
    }
    addCountry(country) {
        this.countries.push(country);
    }
    getCountries() {
        return this.countries;
    }
}