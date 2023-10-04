'use client';
import React, { ChangeEvent, useState } from 'react'
import UserCard, {IUsuario} from '@/components/UserCard'

type TRoles = 'Client' | 'Admin';

interface IUsuarios extends IUsuario {
    id: number;
}


const Example2 = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState<TRoles>('Client')
  const [picture, setPicture] = useState('')
  const [terms, setTerms] = useState(false)
  const [users, setUser] = useState<IUsuario[]>([])

  const handleNameOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value)
  };

  const handleLastNameOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value)
  }

  const handleRoleOnChange = (event:ChangeEvent<HTMLSelectElement>) => {
    if(event.currentTarget.value === 'Client' || event.currentTarget.value === 'Admin'){
      setRole(event.currentTarget.value)
    }
  }

  const handleTermsOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setTerms(event.currentTarget.checked)
  }

  const handlePictureOnChange = (event:ChangeEvent<HTMLInputElement>) =>{
    setPicture(event.currentTarget.value)
  }

  const handleGuardarOnClick = () => {
    const user:IUsuarios =
    {
      firstName : firstName,
      lastName : lastName,
      picture : picture,
      role : role,
      id : users.length
    }
    setUser(users.concat(user));
  }

  return (
    <div>
      <h1 className='text-2xl font-bold'>Capturar datos</h1>
      <div className='flex flex-col'>
        <label htmlFor="firstName">Nombre:</label>
        <input onChange={handleNameOnChange} id='firstName' type="text" value={firstName} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="lastName">Apellido:</label>
        <input onChange={handleLastNameOnChange} id='lastName' type="text" value={lastName} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor ='picture'>Ruta imagen del cliente:</label>
        <input onChange={handlePictureOnChange} id = 'picture' type = 'text' value = {picture}/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="rol">Rol:</label>
        <select onChange={handleRoleOnChange} id='rol' value={role}>
          <option value='Client'>Cliente</option>
          <option value='Admin'>Administrador</option>
        </select>
      </div>
      <div  className='flex flex-row gap-1 items-center'>
        <label htmlFor="terms">Aceptar terminos y servicios</label>
        <input onChange={handleTermsOnChange} id='terms' type="checkbox" checked={terms}/>
      </div>
      <button onClick={handleGuardarOnClick}>Guardar</button>
      <div className='flex flex-col gap-4 items-center'>
      <h1 className='text-2xl font-bold'>Usuarios</h1>
      {
        users.map(
          (user, index) => {
            return (
             UserCard(user)
            )
          }
        )
      }
    </div>
    </div>
    
  )
}

export default Example2