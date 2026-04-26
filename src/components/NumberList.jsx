import React from 'react'

const NumberList = ({numbers}) => {
    //key: identificador unico para o item que se repete
  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
}

export default NumberList;