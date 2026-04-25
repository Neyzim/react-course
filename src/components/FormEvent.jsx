import {useState} from 'react'
// Evento de form:
const FormEvent = () => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => { //funçaõ com a logica de envio de formulário
        event.preventDefault();
        console.log("Enviado: ", value);
    }
  return (
    <form onSubmit={handleSubmit}> {/* aqui digo o que fazer quando der submit no formulario */}
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Preencha o campo' />
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default FormEvent
