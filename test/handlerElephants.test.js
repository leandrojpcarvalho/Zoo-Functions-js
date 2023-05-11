const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('se o parametro passado for undefined retorna undefined', () => {
    expect(handlerElephants()).toBe();
  });
  it('se o parametro passado for diferente de uma string retorna "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(['elephants'])).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants({ species: 'elephants' })).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('verifica se passar um parametro invalido retorna null', () => {
    expect(handlerElephants('elephants')).toBe(null);
  });
  it('verifica se ao passar o parametro count retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('verifica se ao passar o parametro names retorna um array com o nome dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('verifica se ao passar o parametro avaregeAge retorna a quantidade de elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});
