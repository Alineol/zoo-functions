const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((employer) => employer.firstName === employeeName
  || employer.lastName === employeeName);
  // return ids.length > 1 ? data.species.filter((specie, index) =>
  //   specie.id === ids[index]) : data.species.filter((specie) =>
  //   specie.id === ids[0]);
}
console.log(getEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
