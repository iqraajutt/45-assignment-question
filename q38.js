"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Islamabad");
describe_city("India", "Dehli");
