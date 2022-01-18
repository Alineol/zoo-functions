const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((name) => name.managers.includes(id));
}
function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const persons = data.employees.filter((personss) =>
      personss.managers.includes(managerId) === true);
    return persons.map((person) => `${person.firstName} ${person.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
