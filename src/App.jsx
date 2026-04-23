import './App.css'
import Welcome from './components/welcome';
import BomDia from './components/BomDia';
import FatherComponent from './components/FatherComponent';
import Description from './components/Description';
import Dog from './components/Dog';



function App() {
  
  return (
  <>
    <Welcome />
    <BomDia />
    <FatherComponent />
    <Description nome="Bob" idade={30}/>
    <Dog nome="Thor" raca="Vira lata" />
  </>
  );
}

export default App;
