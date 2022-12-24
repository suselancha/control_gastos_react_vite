import React, { useEffect, useState } from 'react'

const ControlPresupuesto = ({presupuesto, gastos}) => {

    const [disponible, setDisponible] = useState(presupuesto);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
      //console.log('Componente listo');
      const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0);
      //console.log(totalGastado);
      const totalDisponible = presupuesto - totalGastado
      setDisponible(totalDisponible);
      setGastado(totalGastado);
    }, [gastos])
    

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
        })
    }


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Gráfica aquí</p>
        </div>

        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span> {formatearCantidad(disponible)}
            </p>

            <p>
                <span>Gastado: </span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto
