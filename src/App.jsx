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
import Warning from './components/Warning';
import NumberList from './components/NumberList';
import StilizedButton from './components/StilizedButton';
import BlueButton from './components/BlueButton';
import Greetins from './components/exercices/Greetins';
import CounterEx from './components/exercices/CounterEx';
import TaskList from './components/exercices/TaskList';
import UseEffectEx from './components/UseEffectEx';
import Timer from './components/Timer';
import { MyContext, MyContextProvider } from './contexts/MyContext';
import ContextValueCheck from './components/ContextValueCheck';
import COntextChildComponent from './components/COntextChildComponent';
import UseReducerCounter from './components/UseReducerCounter';
import DisplayWindowSize from './components/DisplayWindowSize';
import Container from './components/Container';
import UserProfile from './components/UserProfile';
import HeavyCalc from './components/HeavyCalc';
import CallbackCounter from './components/CallbackCounter';




function App() {

  const tasks = [
        { id: 1, text: "Comprar leite" },
        { id: 2, text: "Estudar React" },
    ];
  
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
    {/*Render nulo */}
    <Warning warning={null}/>;
    {/*Listas chaves */}
    <NumberList numbers={[1,2,3,4,5]} />
    {/*Estilização por atributo */}
    <StilizedButton />
    {/*Estilos globais*/}
    <BlueButton />

    {/*Exercicios */}
    <Greetins name="Ney" />
    <CounterEx />
    <TaskList  tasks={tasks} />

  <h1>Parte 2</h1>
    {/* Parte 2 */}
    {/*Use Effect */}
    <UseEffectEx />
    <Timer />
    {/*Context */}
    <MyContextProvider> 
      <COntextChildComponent /> {/*coloco os componentes que vão ter acesso ao contexto dentro do provider */}
      {/*Use Context */}
      <ContextValueCheck />
    </MyContextProvider>
    {/*Use Reducer */}
    <UseReducerCounter />
    {/*Custom Hooks */}
    <DisplayWindowSize />
    {/*Slots e Children props */}
    <Container>
      <h1>Titulo da sessão</h1>
      <p>Subtitulo</p>
    </Container>
    {/*Sincronizar estados com props */}
    <UserProfile userId={2}/>
    {/*useMemo e useCallback */}
    <HeavyCalc numero={5}/>
    <CallbackCounter />
    
  </>
  );
}

export default App;
