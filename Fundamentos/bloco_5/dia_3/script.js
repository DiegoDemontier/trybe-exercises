function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDays () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let daysMonth = document.createElement('li');
    daysMonth.innerHTML = dezDaysList[i];
    daysMonth.className = 'days';
    document.querySelector('#days').appendChild(daysMonth);
  }
}
createDays();

function holidayOrFriday(dayMonth, holidayFriday) {
  let day = document.querySelectorAll('.days')[dayMonth+1];
  if (holidayFriday === 'holiday') {
    day.className += ' holiday';
  }
  if (holidayFriday === 'friday') {
    day.className += ' friday';
  }
}
holidayOrFriday(24, 'holiday');
holidayOrFriday(25, 'holiday');
holidayOrFriday(31, 'holiday');

holidayOrFriday(4, 'friday');
holidayOrFriday(11, 'friday');
holidayOrFriday(18, 'friday');
holidayOrFriday(25, 'friday');

function newButtonHoliday(feriado) {
  let newButton = document.createElement('button')
  newButton.innerHTML = feriado;
  newButton.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(newButton);
}
newButtonHoliday('Feriado');

function clickHoliday () {
  let button = document.querySelector('#btn-holiday');
  let holiday = document.querySelectorAll('.holiday');
  button.addEventListener ('click', function(){

    for (let i = 0; i < holiday.length; i += 1) {
      if (holiday[i].style.backgroundColor === 'yellow') {
        holiday[i].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holiday[i].style.backgroundColor = 'yellow';
      }
    }
  })
}
clickHoliday();

function newButtonFriday (day) {
  let button = document.createElement('button');
  button.innerHTML = day;
  button.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(button);
}
newButtonFriday('Sexta-feira')

function clickFriday () {
  let button = document.querySelector('#btn-friday');
  let friday = document.querySelectorAll('.friday');
  let dias = [];
  button.addEventListener('click', function(){
    for(let i = 0; i < friday.length; i += 1) {
      if (friday[i].innerHTML === 'SEXTOU') {
        friday[i].innerHTML = dias[i]
      } else {
        dias[i] = friday[i].innerHTML;
        friday[i].innerHTML = 'SEXTOU';
      }
    }
  })
}
clickFriday();

function zoom() {

  zoomOn = document.querySelectorAll('.days');

  for (let i = 0; i < zoomOn.length; i += 1) {
    let zoomOn = document.querySelectorAll('.days')[i];
    zoomOn.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '50px';
    })

    zoomOn.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    })
  }

}
zoom();

function criaTarefa() {
  tarefa = document.createElement('span')
  tarefa.innerHTML = 'Tarefa Criada';
  document.querySelector('.my-tasks').appendChild(tarefa);
}
criaTarefa();

function criaCor(novacor) {
  let criaDiv = document.createElement('div');
  criaDiv.className = 'task';
  document.querySelector('span').appendChild(criaDiv);
  criaDiv.style.backgroundColor = novacor;
}
criaCor('green');

function novoEvento () {
  let evento = document.querySelector('.task');

  evento.addEventListener('click', function() {
    if (evento.style.backgroundColor === 'green') {
      evento.className = 'task selected';
      evento.style.backgroundColor = 'red';   
    } else {
      evento.className = 'task';
      evento.style.backgroundColor = 'green';
    }
  })
}
novoEvento();

function addCorDaLegenda() {
  
  let addCorDia = document.querySelectorAll('.days');
  
  for (let i = 0; i < addCorDia.length; i += 1) {
    addCorDia[i].addEventListener('click', function() {
      let cor = document.querySelector('.selected').style.backgroundColor;

      if (addCorDia[i].style.color === 'red') {
        addCorDia[i].style.color = 'rgb(119,119,119)';
      } else {
        addCorDia[i].style.color = cor;
      }
    })
  }
}
addCorDaLegenda();
