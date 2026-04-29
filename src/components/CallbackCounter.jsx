import React, {useCallback, useState} from 'react' //semelhante ao usememo, mas para funções

//react.memo é diferente de use memo, ele memoriza componentes

const Botao = React.memo(({onClick, children}) => {
    return <button onClick={onClick}>{children}</button>
})

const CallbackCounter = () => {
    const [contador, setContador] = useState(0);

    const incrementar = useCallback(()=>{ //essa função só vai se rerenderizar caso os dados mudem
        setContador((contadorAnterior) => contadorAnterior + 1);
    }, [])
  return (
    <div>
      <p>contagem: {contador} </p>
      <Botao onClick={incrementar}>Incremetar 111</Botao>
    </div>
  )
}

export default CallbackCounter
