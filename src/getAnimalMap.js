const { species } = require('../data/zoo_data');

// para criar objeto com regiões
const regions = ['NE', 'NW', 'SE', 'SW'];
const defaultResult = () => {
  const resultObject = {};
  regions.forEach((region) => {
    resultObject[region] = species.filter((animal) => animal.location === region)
      .map((item3) => item3.name);
  });
  return resultObject;
};
// criar objetos com nomes e regiões
const ObjectNames = (option) => {
  if (option.sorted) {
    const resultNamessorted = regions.reduce((objFinal, region) => {
      const result1 = objFinal;
      result1[region] = species.filter((specie) => specie.location === region)
        .map((specieSelected) => ({
          [specieSelected.name]: specieSelected.residents.map((resident) => resident.name).sort(),
        }), {}); return result1;
    }, {}); return resultNamessorted;
  }
  const resultNames = regions.reduce((objFinal, region) => {
    const result1 = objFinal;
    result1[region] = species.filter((specie) => specie.location === region)
      .map((specieSelected) => ({
        [specieSelected.name]: specieSelected.residents.map((resident) => resident.name),
      }), {});
    return result1;
  }, {}); return resultNames;
};
// criar objetos com nomes e sexo:
const notSorted = (option) => {
  const nSorted = regions.reduce((objFinal, region) => {
    const result1 = objFinal;
    result1[region] = species.filter((specie) => specie.location === region)
      .map((specieA) => ({
        [specieA.name]: specieA.residents.filter((resident) => resident.sex === option.sex)
          .map((resident) => resident.name),
      }), {}); return result1;
  }, {}); return nSorted;
};
const objectNamesSex = (option) => {
  if (option.sorted) {
    const resultNameSexSorted = regions.reduce((objFinal, region) => {
      const result1 = objFinal;
      result1[region] = species.filter((specie) => specie.location === region)
        .map((specieA) => ({
          [specieA.name]: specieA.residents.filter((resident) => resident.sex === option.sex)
            .map((resident) => resident.name).sort(),
        }), {}); return result1;
    }, {}); return resultNameSexSorted;
  }
  return notSorted(option);
};
// verificar opções:
const verifyOptions = (option) => {
  if (option.sex) { return objectNamesSex(option); }
  return ObjectNames(option);
};
function getAnimalMap(options = {}) {
  if (!options || !options.includeNames) { return defaultResult(); }
  return verifyOptions(options);
}
module.exports = getAnimalMap;
