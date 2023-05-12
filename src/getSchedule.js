const data = require('../data/zoo_data');

const { hours } = data;
const { species } = data;
const generateSchedule = () => {
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    if (hours[day].open !== 0) {
      schedule[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: [],
      };
    } else {
      schedule[day] = { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' };
    }
  });
  return schedule;
};

const isDay = (param) => Object.keys(hours).includes(param);
const isAnimal = (param) => Object.values(species).some((animal) => animal.name === param);

const fillTheSchedule = () => {
  const schedule = generateSchedule();
  Object.keys(schedule).forEach((day) => {
    const { exhibition } = schedule[day];
    species.forEach((specie) => {
      if (specie.availability.includes(day)) {
        exhibition.push(specie.name);
      }
    });
  });
  return schedule;
};
const schedule = fillTheSchedule();

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget && isAnimal(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (!isDay(scheduleTarget)) {
    return schedule;
  }
  if (scheduleTarget === 'Monday') {
    const newObj = {};
    newObj[scheduleTarget] = schedule.Monday;
    return newObj;
  }
  const newObj = {};
  newObj[scheduleTarget] = schedule[scheduleTarget];
  return newObj;
};

getSchedule('Monday');

module.exports = getSchedule;
