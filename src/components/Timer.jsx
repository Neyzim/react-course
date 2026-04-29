import {useState, useEffect} from 'react'

const Timer = () => {

    const[segundos, setSegundos] = useState(0);

    useEffect(() =>{
        console.log("interval rodando");
        const intervalId = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);

        }, 1000);

        return () => clearInterval(intervalId);
    }, []);



  return (
    <div>
      <p>Segundos: {segundos}</p>
    </div>
  )
}

export default Timer
