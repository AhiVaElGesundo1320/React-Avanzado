import React from 'react'
import { useFormInput } from './useInputForm'

const InputConHookPer = () => {
  const firstName = useFormInput('Ethan')
  const lastName = useFormInput('Martinez')
  return (
    <div>
      <label>
        First Name:
        <input  {...firstName}/>
      </label>
      <label>
      <input  {...lastName}/>
      </label>
      <p>Buenasss {firstName} {lastName} </p>
    </div>
  )
}

export default InputConHookPer
