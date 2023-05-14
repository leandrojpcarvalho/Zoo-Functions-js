const data = require('../data/zoo_data');

const { species } = data;

const mapLocations = () => {
  const arrLocations = [];
  species.forEach((specie) =>
    (!arrLocations.includes(specie.location) ? arrLocations.push(specie.location) : 0));

  return arrLocations;
};

const getAnimalsByLocation = (location) => species.filter((specie) => specie.location === location);

const getResidentsBySex = (specie, param) => {
  if (!param) return specie.residents;
  return specie.residents.filter((animal) => animal.sex === param);
};

const getAnimal = (arrAnimals, sort) => {
  const arrParameter = [];
  arrAnimals.forEach((animal) => {
    arrParameter.push(animal.name);
  });
  if (sort) {
    return arrParameter.sort();
  }
  return arrParameter;
};

const objGenerator = () => {
  const newObj = {};
  mapLocations().forEach((location) => { newObj[location] = []; });
  return newObj;
};

const listOfAnimals = () => {
  const objMap = objGenerator();
  Object.keys(objMap).forEach((location) => {
    objMap[location] = getAnimal(getAnimalsByLocation(location));
  });
  return objMap;
};

const listOfAnimalsIncludeNames = (sort = false, sex) => {
  const newObj = objGenerator();
  Object.keys(newObj).forEach((location) => {
    getAnimalsByLocation(location).forEach((objSpecie) => {
      const objAnimalNames = {};
      objAnimalNames[objSpecie.name] = getAnimal(getResidentsBySex(objSpecie, sex), sort);
      newObj[location].push(objAnimalNames);
    });
  });
  return newObj;
};

const getAnimalMap = (options) => {
  if (!options) return listOfAnimals();
  const { includeNames, sex, sorted } = options;
  if (!includeNames) return listOfAnimals();
  return listOfAnimalsIncludeNames(sorted, sex);
};

module.exports = getAnimalMap;
