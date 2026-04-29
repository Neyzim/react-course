import {useState, useMemo} from 'react' //usememo e usado para operações pesadas, 
// react guarda o valor e reutiliza caso não tenha sido atualizado

const HeavyCalc = ({numero}) => {
    const resultCalculoPesado = useMemo(() =>{
        return operacaoPesada(numero)
    }, [numero]);
  return (
    <div>
      resultado: {resultCalculoPesado}
    </div>
  )
}

const operacaoPesada = (num) =>{
    return num * 1000;
     
}

export default HeavyCalc
