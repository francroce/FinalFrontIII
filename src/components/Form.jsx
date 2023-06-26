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
            setMensaje(`Gracias ${nombre}, nos estaremos contactando via ${email}`);
            setNombre('');
            setEmail('');
            setConsulta('');
    
        }else{
            setMensaje('Por favor ingrese un nombre superior a 6 caracteres')
        }

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-6 w-80'>
            
            <input type="text"
            className="h-10 pl-2 bg-transparent border-b-2 border-[#A32A2A]"
            value={nombre}
            placeholder='Ingrese su nombre'
            onChange={(e) => setNombre(e.target.value)}
            />

            <input type="email"
            className='h-10 pl-2 bg-transparent border-b-2 border-[#A32A2A]'
            value={email}
            placeholder='Ingrese su email'
            onChange={(e) => setEmail(e.target.value)}
            />

            <textarea name="consulta" placeholder='Escriba su consulta aqui...' id="" cols="30" rows="10"
            className='h-28 pl-2 bg-transparent border-b-2 border-[#A32A2A]'
            value={consulta}
            onChange={(e)=> setConsulta(e.target.value)}/>

            <button className='btn h-10 bg-gradient-to-r from-[#A32A2A] to-[#DE3838] text-white font-semibold px-3 py-1 rounded duration-500 md:static' type='submit'>Enviar</button>
            {mensaje && <div className='text-center'>{mensaje}</div>}
        </form>

    </div>
  )
}

export default Form