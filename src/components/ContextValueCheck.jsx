import {useContext} from 'react'
import { MyContext } from '../contexts/MyContext'

const ContextValueCheck = () => {

    const {mensagem} = useContext(MyContext);


  return (
    <div>
    O valor do contexto é: {mensagem}  
    </div>
  )
}

export default ContextValueCheck
