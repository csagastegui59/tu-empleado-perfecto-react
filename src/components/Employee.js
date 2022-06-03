import React from 'react'

export const Employee = ({employee}) => (
  <div className='flex flex-col gap-2 shadow-lg bg-gray-300 rounded p-2 w-[400px]'>
    <p>Nombre: {employee.name}</p>
    <p>Email: {employee.email}</p>
    <p>Rut: {employee.rut}</p>
  </div>
)