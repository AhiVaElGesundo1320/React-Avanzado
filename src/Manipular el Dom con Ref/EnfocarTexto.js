import React, { useRef } from 'react'

const EnfocarTexto = () => {
  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.focus();
  }
  return (
    <div>
      <h1>Enfoque de Texto</h1>
      <input type='text' ref={inputRef}/>
      <button onClick={handleClick}>focus</button>
    </div>
  )
}

export default EnfocarTexto
