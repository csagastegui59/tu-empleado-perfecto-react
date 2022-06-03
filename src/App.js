import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Companies } from './pages/Companies';
import { Company } from './pages/Company';
import Navbar from './components/Navbar';
import { CreateCompanyForm } from './components/CreateCompanyForm';
import { CreateEmployeeForm } from './components/CreateEmployeeForm';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/companies/:id' element={<Company />} />
        <Route path='/companyForm' element={<CreateCompanyForm/>} />
        <Route path='/employeeForm' element={<CreateEmployeeForm/>} />
      </Routes>
    </div>
  );
}

export default App;
