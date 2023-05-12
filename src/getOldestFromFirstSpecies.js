const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const { employees } = data;
  const { species } = data;
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  return Object.values(species
    .filter((specie) => specie.id === animalId)[0]
    .residents.sort((a, b) => b.age - a.age)[0]);
};

module.exports = getOldestFromFirstSpecies;
