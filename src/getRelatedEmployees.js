const data = require('../data/zoo_data');

const isManager = (id) => {
  const { employees } = data;
  const arrOfManagers = [];
  employees.forEach((employee) => {
    employee.managers.forEach((manager) => {
      if (!arrOfManagers.includes(manager)) {
        arrOfManagers.push(manager);
      }
    });
  });
  return arrOfManagers.includes(id);
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const { employees } = data;
  const subordinados = [];
  employees.filter((employee) => employee.managers
    .includes(managerId))
    .forEach((employee) => {
      const { firstName, lastName } = employee;
      subordinados.push([firstName, lastName].join(' '));
    });
  return subordinados.flat();
};

module.exports = { isManager, getRelatedEmployees };
