import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Companies } from './pages/Companies';
import { Company } from './pages/Company';
import Navbar from './components/Navbar';
import { CreateCompanyForm } from './components/CreateCompanyForm';
import { CreateEmployeeForm } from './components/CreateEmployeeForm';
import { useState } from 'react';

function App() {
  const [companyId, setCompanyId] = useState('')
  const route = (id) => {setCompanyId(id)}
  return (
    <div className='App'>
      <Navbar companyId={companyId}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/companies/:id' element={<Company route={route}/>} />
        <Route path='/companies/:id/employeeForm' element={<CreateEmployeeForm/>} />
        <Route path='/companyForm' element={<CreateCompanyForm/>} />
      </Routes>
    </div>
  );
}

export default App;
