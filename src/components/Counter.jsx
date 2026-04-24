import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(1); 
  return (
    <div>
      <p>Voce Clicou {count} vezes</p>
      <button onClick={() => (setCount(count +1))}>Aumentar</button>
    </div>
  )
}

export default Counter;
