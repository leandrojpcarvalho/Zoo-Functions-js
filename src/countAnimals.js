const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species } = data;
  if (animal) {
    const { species: specie, sex } = animal;
    if (!sex) {
      return species.find((bicho) => bicho.name === specie).residents.length;
    }
    return species.find((bicho) => bicho.name === specie)
      .residents.filter((bicho) => bicho.sex === sex).length;
  }
  const newObj = {};
  species.forEach((bicho) => {
    newObj[bicho.name] = bicho.residents.length;
  });
  return newObj;
};

module.exports = countAnimals;
