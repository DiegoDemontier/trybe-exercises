function encode(string1) {
  let stringA = '';
  let stringE = '';
  let stringI = '';
  let stringO = '';
  let stringU = '';
  stringA = string1.replace(/a/g, '1');
  stringE = stringA.replace(/e/g, '2');
  stringI = stringE.replace(/i/g, '3');
  stringO = stringI.replace(/o/g, '4');
  stringU = stringO.replace(/u/g, '5');
  return stringU;
}

function decode(string2) {
  let stringA = '';
  let stringE = '';
  let stringI = '';
  let stringO = '';
  let stringU = '';
  stringA = string2.replace(/1/g, 'a');
  stringE = stringA.replace(/2/g, 'e');
  stringI = stringE.replace(/3/g, 'i');
  stringO = stringI.replace(/4/g, 'o');
  stringU = stringO.replace(/5/g, 'u');
  return stringU;
}

module.exports = { encode, decode, };