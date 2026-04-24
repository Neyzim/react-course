import {useState} from 'react'

const UserInfoForm = () => {
    //Use State usa variaveis e coleta as informações e exibe dinâmicamente 

    const [name, setName] = useState("");
    const [email, setEmail] =useState("");

    const handleSubmit = (event) => {
        event.preventDefault() //salva o estado das informações para envio para a API (fetch)

        console.log(name, email);
    }
  return (
    <form onSubmit={handleSubmit}>  {/*Evento que chama a funçaõ que envia o estado pra api  */}
    
        <input 
        type="text" 
        value={name} //value={var} diz em que variavel guardar o valor digitado
        onChange={(e) => setName(e.target.value)} //Target.value diz que é pra pegar o que foi digitado pelo user
        placeholder="Digite o seu Nome" />

        <input type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        placeholder='Digite seu Email'/>

        <button type='submit'>Enviar</button>
    </form>
    

  )
}

export default UserInfoForm
