import {useReducer} from 'react' //usado para estados mais complexos(Objetos complexos etc)

const estadoInicial = {contador: 0} //defino o estado inicial

function reducer(estado, acao)
{
    switch(acao.tipo){
        case "incrementar":
            return {contador: estado.contador + 1}

        case "decrementar":
            return {contador: estado.contador - 1}
       
        case "resetar":
           return {contador: 0}

        default:
            throw new Error("Açaõ não encontrada");
    }
}
const UseReducerCounter = () => { 
    //inicializar o use reducer com o estado inicial e função modificadora
    const [estado, dispatch] = useReducer(reducer, estadoInicial);


  return (
    <div>
        <p>Contagem: {estado.contador}</p>
        <button onClick={() => dispatch({tipo: "incrementar"})}>Incrementar</button>
        <button onClick={() => dispatch({tipo: "decrementar"})}>decrementar</button>
        <button onClick={() => dispatch({tipo: "resetar"})}>resetar</button>
        
    </div>
  )
}

export default UseReducerCounter
