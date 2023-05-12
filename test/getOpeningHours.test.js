const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se passado um paramtro vazio retorna um objeto', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Verifica se ao passar um dia errado retorna um erro', () => {
    expect(() => getOpeningHours('Segunda')).toThrow(/^The day must be valid. Example: Monday$/);
  });
  it('Verifica se ao passar a hora retonar um erro', () => {
    expect(() => getOpeningHours('Monday', '10')).toThrow(/^The minutes should represent a number$/);
  });
  it('Verifica se ao passar a hora e minuto retonar um erro', () => {
    expect(() => getOpeningHours('Monday', '10:20')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('Verifica se ao passar a hora acima de 12 retonar um erro', () => {
    expect(() => getOpeningHours('Monday', '13:20-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });
  it('Verifica se ao passar o minuto acima de 59 retonar um erro', () => {
    expect(() => getOpeningHours('Monday', '11:60-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
  it('Verifica se ao passar abreviation GM retonar um erro', () => {
    expect(() => getOpeningHours('Monday', '11:10-GM')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('Verifica se ao passar um horario outservice retorna The zoo is closed', () => {
    expect(getOpeningHours('Monday', '11:10-AM')).toBe('The zoo is closed');
  });
  it('Verifica se ao passar um horario correto retorna o horario de funcionamento', () => {
    expect(getOpeningHours('tuesday', '11:10-AM')).toBe('The zoo is open');
  });
});
