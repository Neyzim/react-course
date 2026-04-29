import {useContext} from 'react'
import { MyContext } from '../contexts/MyContext'

const COntextChildComponent = () => {
//A ideia aqui é alterar a mensagem do MyContext

    const {mensagem, setMensagem} = useContext(MyContext); 
  return (
    <div>
        <p>{mensagem}</p>
      <button onClick={() => setMensagem("Nova Mensagem")}>Alterar Mensagem</button>
    </div>
  )
}

export default COntextChildComponent;
