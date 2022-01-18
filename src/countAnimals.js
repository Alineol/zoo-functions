const data = require('../data/zoo_data');

const objectAnimals = {};
data.species.map((item, index) => {
  objectAnimals[data.species[index].name] = data.species[index].residents.length;
  return [];
});
function countAnimals(animal) {
  if (!animal) {
    return objectAnimals;
  }
  if (Object.keys(animal).length === 1) {
    const string = animal.specie;
    return objectAnimals[string];
  }
  const selectedspecie = data.species.find((specie) => specie.name === animal.specie);
  return selectedspecie.residents.filter((item) => item.sex === animal.sex).length;
}

module.exports = countAnimals;
