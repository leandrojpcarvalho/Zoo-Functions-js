const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName) {
    const { employees } = data;
    return employees.find((employee) =>
      employee.firstName === employeeName
      || employee.lastName === employeeName);
  }
  return {};
};

getEmployeeByName();
module.exports = getEmployeeByName;
