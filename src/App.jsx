import './App.css'
import Welcome from './components/welcome';
import BomDia from './components/BomDia';
import FatherComponent from './components/FatherComponent';
import Description from './components/Description';



function App() {
  
  return (
  <>
    <Welcome />
    <BomDia />
    <FatherComponent />
    <Description nome="Bob" idade={30}/>
  </>
  );
}

export default App;
