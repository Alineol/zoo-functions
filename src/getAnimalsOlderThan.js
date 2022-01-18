const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((specie) =>
    specie.name === animal)
    .residents.every((item) => item.age > age);
}
console.log(getAnimalsOlderThan('lions', 0));

module.exports = getAnimalsOlderThan;
