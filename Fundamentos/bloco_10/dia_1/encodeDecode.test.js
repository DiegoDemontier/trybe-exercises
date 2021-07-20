const encodeDecode = require('./encodeDecode');

describe('Testa as funções encode e decode.', () => {

  it ('Testa se encode e decode são funções', () => {
    expect(typeof encodeDecode.decode).toBe('function')
    expect(typeof encodeDecode.encode).toBe('function')
  });

  it('Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encodeDecode.encode('aeiou')).toBe('12345');
  });

  it('Testa se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u, respectivamente', () => {
    expect(encodeDecode.decode('12345')).toBe('aeiou');
  });

  it('Testa se as demais letras/números não são convertidos para cada caso', () => {
    expect(encodeDecode.encode('teste encodeDecode')).toBe('t2st2 2nc4d2D2c4d2');
    expect(encodeDecode.decode('t2st2 2nc4d2D2c4d2')).toBe('teste encodeDecode');  
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encodeDecode.encode('teste encodeDecode').length).toBe(18);
    expect(encodeDecode.decode('t2st2 2nc4d2D2c4d2').length).toBe(18);
  });
});