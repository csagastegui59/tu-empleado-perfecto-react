import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../components/media/logo.png";

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="fixed w-full bg-blue-300 p-3 gap-4 flex flex-row">
      <p className="text-xl">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </p>
      <p className="text-xl">
        <Link to="/">Inicio</Link>
      </p>
      <p className="text-xl">
        <Link to="/companies">Compañías</Link>
      </p>
      {console.log(location)}
      {location.pathname === "/companies" ? (
        <p className="text-xl">
          <Link to="/companyForm">Agregar Compañía</Link>
        </p>
      ) : undefined}
      {location.pathname !== "/" &&
      location.pathname !== "/companies" &&
      location.pathname !== "/companyForm" &&
      location.pathname !== "/employeeForm" ? (
        <p className="text-xl">
          <Link to="/employeeForm">Agregar Empleado</Link>
        </p>
      ) : undefined}
    </div>
  );
}
