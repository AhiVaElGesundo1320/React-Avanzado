import React, { useRef } from 'react'

const AgregaReferenciaComp = () => {
  const ref = useRef(0)

  const handleClick = () =>{
    ref.current = ref.current + 1;
    alert('blabla ' + ref.current + ' blablabla')
  }
  return (
    <div>
      <h1>Agregar Referencia a un Componente</h1>

      <button onClick={handleClick}>
        +1
      </button>
      <p>A puslado {ref.current} veces!!</p>
    </div>
  )
}

export default AgregaReferenciaComp
