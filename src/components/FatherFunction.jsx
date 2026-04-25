import React from 'react'
import ChlidFuncion from './ChlidFuncion';

const FatherFunction = () => {
    const handleChlidClick = () => {
        console.log("clicou no botão do elemento filho");
    }
    
  return (
    <div>
        <ChlidFuncion onChildClick={handleChlidClick}/> {/* é possivel passar uma função como Prop   */}
    </div>
  )
}

export default FatherFunction
