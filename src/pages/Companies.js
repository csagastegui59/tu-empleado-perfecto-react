import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Company } from "../components/Company";

export function Companies() {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/companies")
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
      });
  }, []);
  return (
    <div>
      {companies.length !== 0 ? (
        <div className="flex flex-col gap-10 shadow-lg bg-gray-300 rounded p-2 w-[400px] h-[40px]">
          {companies.map((company) => {
            return (
              <>
                {" "}
                <Link to={`/companies/${company.id}`}>
                  <Company func={company.id} company={company} key={company.id} />
                </Link>
              </>
            );
          })}
        </div>
      ) : (
        <p>
          Aún no hay empresas para mostrar, puedes agregar una haciendo click en
          el botón de 'Agregar Empresa'
        </p>
      )}
    </div>
  );
}
