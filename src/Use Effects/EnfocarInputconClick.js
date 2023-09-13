import React, { useEffect, useRef } from 'react'

const EnfocarInputconClick = ({onChange, value}) => {
  const ref = useRef(null)
   useEffect(() => {
     ref.current.focus();
   }, [])

   
   return (
    <div>
      <h1>Enfocar Input en el Montaje de Componente</h1>
      <input 
        ref={ref}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default EnfocarInputconClick
