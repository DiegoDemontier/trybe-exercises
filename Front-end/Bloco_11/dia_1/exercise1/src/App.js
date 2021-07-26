import './App.css';
import Exercise2 from './components/Exercise_2'
import Exercise3 from './components/Exercise_3'

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];


function App() {
  return (
    <div>
      <ul> { tarefas.map((element) => Task(element)) } </ul>
      <Exercise2 />
      <Exercise3 />
    </div>
  );
}

export default App;
