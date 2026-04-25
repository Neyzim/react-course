import React from 'react'

const Button = () => {
    const handleButtonClick = (number) => { // Funções com Lógica extensa são colocados em funções separadas
        console.log("Logica");
    }
  return (
    
      <button onClick={() => handleButtonClick(5)}>Clique em Mim</button> // arrow function é usada quando precisa passar uma rgumento pra função
 
  )
}

export default Button;
