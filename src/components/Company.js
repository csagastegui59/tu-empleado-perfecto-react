import React from 'react'

export const Company = ({company}) => {
  return(
    <>
  <div className='flex flex-col gap-20 shadow-lg bg-gray-300 rounded p-2 w-[400px] h-[40px]'>
    <p>Nombre: {company.name}</p>
  </div>
  </>
)}
