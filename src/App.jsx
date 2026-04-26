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
import FormEvent from './components/FormEvent';
import COndicionalRender from './components/COndicionalRender';
import LoginButton from './components/LoginButton';



function App() {
  
  return (
  <>
    {/*Criação de componente */}
    <Welcome />
    {/*Expressões do JSX */}
    <BomDia />
    {/*Componente dentro de Componente */}
    <FatherComponent />
    {/*Props */}
    <Description nome="Bob" idade={30}/>
    {/*Desetruturação de Props */}
    <Dog nome="Thor" raca="Vira lata" />
    {/*Use State */}
    <Counter />
    {/*Multiplos Estados */}
    <UserInfoForm />
    {/*Eventos */}
    <Button />
    {/*Funções de manipulação de eventos com props */}
    <FatherFunction />
    {/*Eventos de formulário */}
    <FormEvent />
    {/*Renderiação condicional & expressão ternária*/}
    <COndicionalRender user="Carlos" />
    <LoginButton loggedIn={true}/>
  
  </>
  );
}

export default App;
