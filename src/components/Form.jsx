import React, { useState } from 'react'

const Form = () => {
    const[nombre,setNombre] = useState('');
    const[email,setEmail] = useState('');
    const[consulta,setConsulta] = useState('');
    const[mensaje,setMensaje] = useState('');

    function handleSubmit(e){
        e.preventDefault()

        const contacto={
            Cnombre: nombre.trim(),
            Cemail: email,
            Cmensaje: mensaje
        }

        if(contacto.Cnombre.length >= 6){
            setMensaje(`Gracias ${nombre} nos estaremos contactando via ${email}`);
            setNombre('');
            setEmail('');
            setConsulta('');
    
        }else{
            setMensaje('Por favor chequea que la información sea correcta')
        }

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-6 w-full'>
            
            <input type="text"
            value={nombre}
            placeholder='Ingrese su nombre'
            onChange={(e) => setNombre(e.target.value)}
            />

            <input type="email"
            value={email}
            placeholder='Ingrese su email'
            onChange={(e) => setEmail(e.target.value)}
            />

            <textarea name="consulta" placeholder='Escriba su consulta aqui...' id="" cols="30" rows="10"
            value={consulta}
            onChange={(e)=> setConsulta(e.target.value)}/>

            <button className='btn bg-gradient-to-r from-[#A32A2A] to-[#DE3838] text-white font-semibold px-3 py-1 rounded duration-500 md:static' type='submit'>Enviar</button>
            {mensaje && <div>{mensaje}</div>}
        </form>

    </div>
  )
}

export default Form