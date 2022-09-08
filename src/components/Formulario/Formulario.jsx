import React from 'react'
import { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        //console.log(nombre, apellido, direccion)
    }

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    }

    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    }

    const handleChangeDireccion = (event) => {
        setDireccion(event.target.value);
    }
  return (
    <div>
        <form action='' onSubmit={handleSubmit}>
            <input
                value={nombre}
                onChange={handleChangeNombre}
                type="text"
                placeholder="Nombre ..."
                name="nombre"
            />
            <input
                value={apellido}
                onChange={handleChangeApellido}
                type="text"
                placeholder="Apellido ..."
                name="apellido"
            />
            <input
                value={direccion}
                onChange={handleChangeDireccion}
                type="text"
                placeholder="Direccion ..."
                name="direccion"
            />
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Formulario