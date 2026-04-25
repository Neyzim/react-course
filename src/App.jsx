import './App.css'
import Welcome from './components/welcome';
import BomDia from './components/BomDia';
import FatherComponent from './components/FatherComponent';
import Description from './components/Description';
import Dog from './components/Dog';
import Counter from './components/Counter';
import UserInfoForm from './components/UserInfoForm';
import Button from './components/Button';
import FatherFunction from './components/FatherFunction';



function App() {
  
  return (
  <>
    <Welcome />
    <BomDia />
    <FatherComponent />
    <Description nome="Bob" idade={30}/>
    <Dog nome="Thor" raca="Vira lata" />
    <Counter />
    <UserInfoForm />
    <Button />
    <FatherFunction />
  </>
  );
}

export default App;
