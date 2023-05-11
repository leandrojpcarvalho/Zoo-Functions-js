const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const arrOfIds = [...ids];
  const animals = [];
  const { species } = data;
  arrOfIds.forEach((id) => {
    animals.push(species.filter((specie) => specie.id === id));
  });
  return animals.flat();
};

module.exports = getSpeciesByIds;
