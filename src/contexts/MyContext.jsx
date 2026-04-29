import { useState, createContext, Children } from "react";


export const MyContext = createContext(); //è onde vai estar o valor do meu contexto

export const MyContextProvider = ({children}) => { //é quem vai mostrar quais componentes vão usufriir do contexto
    const [mensagem, setMensagem] = useState("Mensagem inicial");

    const valorDoContexto = { //variável que une o objeto que vai ser entregue aos componentes que consomem esse contexto
        mensagem,
        setMensagem
    }

    return (
        <MyContext.Provider value={valorDoContexto}> 
            {children}                   {/*Quem esta dentro do provider pode receber o valor do contexto */}
        </MyContext.Provider>
    );

}

