import { useState, useEffect } from "react";

export default function useWindowSize(){
    const [windowSize, setWindowSize] = useState({ //captando os valores
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(()=> { //função que altera os valores
        function handleResizeWindow (){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        //Evento que dispara a função
        window.addEventListener('resize', handleResizeWindow)
        handleResizeWindow()

        //limpeza de memória
        return () => window.removeEventListener('resize', handleResizeWindow);
    }, []);
    return windowSize;
}