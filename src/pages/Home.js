import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <p>
        Bienvenido a 'Tu empleado Perfecto'
      </p>
      <p>
        Accede a:
      </p>
      <Link to='/companies'>
        <div className='p-5 mt-5 origin-center text-white rounded-3xl transition ease-in-out delay-150 bg-blue-500  hover:scale-110 hover:bg-indigo-500 duration-300'>
          Compañías
        </div>
      </Link>
    </div>
  );
}