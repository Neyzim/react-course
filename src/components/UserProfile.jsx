import {useState, useEffect} from 'react'

const UserProfile = ( {userId} ) => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const buscarUsuario = async() => {
            const resposta = await fetch(//`https://jsonplaceholder.typicode.com/posts/${userId}`
            );
            
            const dadosUsuario = await resposta.json()
            setUsuario(dadosUsuario);
        };
        if(userId){
            buscarUsuario()
        }
       
    }, [userId]);


  return (
    <div>
      {usuario ?(<div>
                <h1>{usuario.title}</h1>
                <p>{usuario.body}</p>
                </div>) : 
            (<p>Carregando Perfil</p>)}
    </div>
  )
}

export default UserProfile;
