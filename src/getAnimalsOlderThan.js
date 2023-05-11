const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const { species } = data;
  const { residents } = species.find((specie) => specie.name === animal);

  return residents.every((pet) => pet.age > age);
};

module.exports = getAnimalsOlderThan;
