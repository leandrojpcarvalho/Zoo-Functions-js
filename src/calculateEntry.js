const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const objVisitors = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((visitor) => {
    if (visitor.age < 18) {
      objVisitors.child += 1;
    } else if (visitor.age >= 18 && visitor.age < 50) {
      objVisitors.adult += 1;
    } else {
      objVisitors.senior += 1;
    }
  });
  return objVisitors;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const { prices } = data;
  const visitors = countEntrants(entrants);
  let sum = 0;
  Object.entries(visitors).forEach((chave) => {
    const [type, number] = chave;
    sum += number * prices[type];
  });
  return sum;
};

module.exports = { calculateEntry, countEntrants };
