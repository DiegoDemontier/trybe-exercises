const states = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goías' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraíma' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
  ];

function getStates() {
  const estado = document.querySelector('#estado');
  for(let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    option.value = states[index].value;
    option.innerText = states[index].label;
    estado.appendChild(option);
  }
}
getStates();

document.querySelector('#data').value.length

function valida() {
  const button = document.querySelector('#button');
  button.addEventListener('click', () => {
    const inpuData = document.querySelector('#data');
    inpuData.value.slice(0,2) > 31 || inpuData.value.slice(0,2) < 0 ? alert('Campo "Data" com dia inválido'): null;
    inpuData.value.slice(2,5) > 12 || inpuData.value.slice(2,4) < 0 ? alert('Campo "Data" com mês inválido'): null;
    inpuData.value.slice(4,7) < 0 ? alert('Campo "Data" com ano inválido'): null;
  })
}
valida();
