import {useEffect, useState} from 'react'

const UseEffectEx = () => {
    //Executa algo baseado em algo
    // pode ser a mudança de um valor, carregamento de uma pagina, etc
    const [contador, setContador] = useState(0);

    useEffect(() =>{ // Recebe uma função anonima que é o que será executado ao longo de uma modificação
        document.title = `voce clicou ${contador} vezes`
    })
  return (
    <div>
        <p>voce clicou ${contador} vezes!</p>
        <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
      
    </div>
  )
}

export default UseEffectEx
