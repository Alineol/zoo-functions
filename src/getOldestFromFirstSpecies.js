const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalId = data.employees.find((item) => item.id === id)
    .responsibleFor[0];
  const oldest = data.species.find((item) => item.id === animalId)
    .residents.reduce((acc, item) => (acc.age > item.age ? acc : item));
  return [oldest.name, oldest.sex, oldest.age];
}
module.exports = getOldestFromFirstSpecies;
