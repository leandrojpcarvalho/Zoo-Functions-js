const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getEmployee = (objEmployee) => employees.find((employee) =>
  employee.firstName === objEmployee.name
  || employee.lastName === objEmployee.name
  || employee.id === objEmployee.id);

const getAnimals = (arrIdAnimals) => species.filter((animal) =>
  arrIdAnimals.some((idAnimal) => animal.id === idAnimal));

const generateArrData = (arrOfAnimals) => {
  const arrSpecies = [];
  const arrLocation = [];
  arrOfAnimals.forEach((animal) => {
    arrSpecies.push(animal.name);
    arrLocation.push(animal.location);
  });
  return [arrSpecies, arrLocation];
};

const genarateObjReturned = (objEmployee, funcAninimals, funcArrData) => {
  const { id, firstName, lastName, responsibleFor } = objEmployee;
  const arrAnimals = funcAninimals(responsibleFor);
  const [arrSpecies, arrLocation] = funcArrData(arrAnimals);

  return {
    id,
    fullName: firstName.concat(' ', lastName),
    species: arrSpecies,
    locations: arrLocation,
  };
};
const getEmployeesCoverage = (param) => {
  if (!param) {
    return employees.map((employee) => genarateObjReturned(employee, getAnimals, generateArrData));
  }
  if (param.name || param.id) {
    const employee = getEmployee(param);
    if (!employee) {
      throw new Error('Informações inválidas');
    }
    return genarateObjReturned(employee, getAnimals, generateArrData);
  }
};

getEmployeesCoverage();
module.exports = getEmployeesCoverage;
