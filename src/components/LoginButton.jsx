


const LoginButton = ({loggedIn}) => {
    // a idéia aqui é exibir o botão sair se logado ou vice versa
  return (
    <div>
      {loggedIn ? <button>Sair</button> : <button>Entrar</button>} {/*parametro ? se true : se false*/}
    </div>
  )
}

export default LoginButton
