import React from 'react'

const Dog = ({nome, raca}) => {
  return (
    <div>
      <p>o cachorro se chama {nome} e é da raça {raca}!</p>
    </div>
  );
};

export default Dog;