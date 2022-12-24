import React, { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();
        //console.log('Enviando Formulario');
        // Convertir string a numero
        //console.log(Number(presupuesto));
        if(!presupuesto || presupuesto < 0) {
            setMensaje('No es un presupuesto válido');
            return;
        }
        
        //console.log('Si es un presupuesto válido');
        setMensaje('');
        // Verifico el tipo
        //console.log(typeof presupuesto);
        setIsValidPresupuesto(true);

    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label htmlFor="">Definir Presupuesto</label>
                <input 
                    className='nuevo-presupuesto'
                    type="number"
                    placeholder='Añade tu presupuesto'
                    value={presupuesto}
                    onChange={(e) => setPresupuesto(Number(e.target.value))}
                />
            </div>
            <input type="submit" value="Añadir" />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
        </form>
    </div>
  )
}

export default NuevoPresupuesto