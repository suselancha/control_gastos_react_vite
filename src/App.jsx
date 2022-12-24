import { useEffect, useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './helpers'
import ListadoGastos from './components/ListadoGastos';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    //console.log('Componente App listo');
    if(Object.keys(gastoEditar).length > 0) {
      //console.log('GastoEditar tiene algo');
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 1000);
    }
  }, [gastoEditar])
  

  const handleNuevoGasto = () => {
    //console.log('click para añadir un nuevo gasto');
    setModal(true);
    setGastoEditar({});
    setTimeout(() => {
      setAnimarModal(true);
    }, 1000);
  }

  const guardarGasto = gasto => {
    //console.log(gasto)
    if(gasto.id){
      //Editar gasto
      const gastosActualizados = gasto.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);
    }else{
      //Nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  }
  

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
      />
      
      {/* Ejemplo con ternario y siempre respuesta */}
      {/* {isValidPresupuesto ? (
        <div className='nuevo-gasto'>
          <img
            src={IconoNuevoGasto}
            alt="icono nuevo gasto"
          />
        </div>
      ) : null } */}

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
            />
          </main>

          <div className='nuevo-gasto'>
            <img
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal &&
        <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        gastoEditar={gastoEditar}
        />}
      
    </div>
  )
}

export default App
