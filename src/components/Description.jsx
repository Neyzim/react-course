import React from 'react'

const Description = (props) => {
  return (
    <div>
      <p>Seu nome é : {props.nome}</p>
      <p>Sua idade é : {props.idade} de idade.</p>
    </div>
  )
}

export default Description
