const data = require('../data/zoo_data');
// a função recebe um array,
// retorna um objeto com as propriedades child < 18, adult entre 18 e 49 < e senior entre >= 50
// const entrantss = [
//   { name: 'ana', age: 5 },
//   { name: 'ana', age: 5 },
//   { name: 'ana', age: 5 },
//   { name: 'ana', age: 18 },
//   { name: 'ana', age: 18 },
//   { name: 'ana', age: 50 },
// ];
function countEntrants(entrants) {
  const objectResult = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) {
      objectResult.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      objectResult.adult += 1;
    } else {
      objectResult.senior += 1;
    }
  });
  return objectResult;
}

// recebe o mesmo array da função anterior
// gilde = 20.99 senior = 24,99, adult = 49.99

function calculateEntry(entrants) {
  let price = 0;
  if (!entrants) { return 0; }
  if (Object.keys(entrants).length === 0) { return 0; }
  const quantEntrants = countEntrants(entrants);
  price += (quantEntrants.child) * 20.99;
  price += (quantEntrants.adult) * 49.99;
  price += (quantEntrants.senior) * 24.99;
  return price;
}
// console.log(calculateEntry(entrantss));

module.exports = { calculateEntry, countEntrants };
