import Link from 'next/link'
import React from 'react'
import Rutas from '@/utils/constants'

const Header = () => {
  return (
    <div className='w-full flex flex-row justify-between p-6 bg-blue-500 text-white'>
      <Link href={Rutas.Inicio} className='text-xl font-bold'>React example</Link>
      <div className='flex flex-row gap-4'>
        <Link href={Rutas.Inicio}>Inicio</Link>
        <Link href={Rutas.Ejemplos}>Ejemplos</Link>
      </div>
    </div>
  )
}

export default Header


