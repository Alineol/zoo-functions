const { hours, species } = require('../data/zoo_data');

const daysArray = Object.keys(hours);
const animalArray = species.map((animal) => animal.name);
// para usar com a const daysArray:
function findAnimals(day) {
  return species.filter((item) => item.availability.includes(day))
    .map((item) => item.name);
}
// para criar objeto:
function creatObject() {
  const objectResult = {};
  daysArray.forEach((item) => {
    if (item === 'Monday') {
      objectResult[item] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      const { open } = hours[item];
      const { close } = hours[item];
      objectResult[item] = {
        officeHour: `Open from ${open}am until ${close}pm`, exhibition: findAnimals(item) };
    }
  });
  return objectResult;
}
// encontrar animal:
function getAnimalSchedule(animal) {
  return species.find((item) => item.name === animal);
}
function getSchedule(scheduleTarget) {
  if (!scheduleTarget) { return creatObject(); }
  if (daysArray.includes(scheduleTarget)) {
    return { [scheduleTarget]: creatObject()[scheduleTarget] };
  }
  if (animalArray.includes(scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget).availability;
  }
  return creatObject();
}

console.log(getSchedule('snakes'));

// const lala = arrayHours.reduce((acc, item, index) => {
//   const availability = { ...acc, [item[0]]: { officerHour: `Open from ${item[1].open}am until ${item[1].close}pm `, exhibition: findAnimals(item[0]) } };
//   // if (item[0] === 'Monday') { return 'lala'}
//   return availability;
// }, []);
// console.log(lala);

module.exports = getSchedule;
