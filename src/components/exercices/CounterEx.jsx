import React, { useState } from 'react'

const CounterEx = () => {
    const[cont, setCount] = useState(1);
  return (
    <div>
      <button onClick={() => (setCount(cont + 1))}>Clique</button>
      <p>Voce Clicou {cont} vezes</p>
    </div>
  )
}

export default CounterEx
