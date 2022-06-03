import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Employee } from '../components/Employee';

export function Company() {
  const [company, setCompany] = useState({});
  let { id } = useParams();
  const [loading, setLoading] = useState(true);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    fetch(`http://localhost:3000/companies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCompany(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className='pt-20 pl-10'>
        {loading ? (
          <p>loading</p>
        ) : (
          <>
            <p className='text-5xl mt-2 mb-2'>{capitalizeFirstLetter(company.name)}</p>
            <p className='text-sm text-gray-600 mt-2 mb-2'>
              {capitalizeFirstLetter(company.address)}
            </p>
            <p className='text-sm text-gray-600 mt-2 mb-2'>(+51){company.telephoneNumber}</p>
            <p>Empleados:</p>
            {company.employees.length !== 0 ? (
              <div className='flex flex-wrap gap-6'>
                {company.employees.map((employee) => {
                  return <Employee key={employee.id} employee={employee} />;
                })}
              </div>
            ) : (
              <p>
                {' '}
                Esta empresa no cuenta con empleados por ahora, puedes agregar
                uno haciendo click en el botón de 'Agregar Empleado'
              </p>
            )}
          </>
        )}
        <div>
        </div>
      </div>
    </>
  );
}
