import React from 'react'
// a idéia aqui é mostrar como aplicar os estilos conforme o atributo, isso Inline
const StilizedButton = () => {

    const buttonStyle = {
        backgroundColor: "#333",
        color: "#fff",
        padding: "15px 2px",
        cursor: "pointer"
    }
  return (
    <button style={buttonStyle}>Click Here</button>
  )
}

export default StilizedButton
