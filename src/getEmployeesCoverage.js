const { species, employees } = require('../data/zoo_data');

function creatObject(information2) {
  const person = employees.find((item) => item.firstName === information2.name
  || item.id === information2.id
  || item.lastName === information2.name);
  const speciesR = person.responsibleFor.map((item) =>
    species.find((elementFind) =>
      elementFind.id === item));
  const speciesNames = speciesR.map((item) => item.name);
  const speciesLocation = speciesR.map((item) => item.location);
  const objectResult = {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: speciesNames,
    locations: speciesLocation,
  };
  return objectResult;
}

function getEmployeesCoverage(information) {
  if (!information) {
    const peoples = [];
    employees.forEach((item) => peoples.push(creatObject({ name: item.firstName })));
    return peoples;
  }
  try {
    creatObject(information);
  } catch (e) {
    throw Error('Informações inválidas');
  }
  return creatObject(information);
}

module.exports = getEmployeesCoverage;
