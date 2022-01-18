const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.length > 1 ? data.species.filter((specie, index) =>
    specie.id === ids[index]) : data.species.filter((specie) =>
    specie.id === ids[0]);
}
console.log(getSpeciesByIds('lions'));
module.exports = getSpeciesByIds;
