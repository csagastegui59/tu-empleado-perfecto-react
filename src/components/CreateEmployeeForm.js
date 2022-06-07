import React, { useState } from "react";
import { useParams } from "react-router-dom";

export function CreateEmployeeForm() {
  const [name, setName] = useState("");
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submited, setSubmited] = useState(false);
  const params = useParams();
  const baseURL = "http://localhost:3000/companies";

  function createPostEmployee(event) {
    setError(false);
    setSubmited(false);
    event.preventDefault();
    fetch(baseURL + "/" + params.id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        rut,
        companyId: { ...params.id },
      }),
    }).then((response) => {
      if (!response.ok) {
        setError(true);
      } else {
        setSubmited(true);
      }
    });
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <form
        onSubmit={createPostEmployee}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Nombre de empleado:
            <input
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={name}
              id="name"
            />
          </label>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="rut"
          >
            Número de RUT:
            <input
              onChange={(e) => setRut(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="rut"
              value={rut}
              id="rut"
            />
          </label>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            email:
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              value={email}
              id="email"
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
        {error ? (
          <p className="text-red-500">Debes llenar todos los campos</p>
        ) : null}
        {submited ? (
          <p className="text-green-500">Se agregó el empleado {name} de manera exitosa</p>
        ) : null}
      </form>
    </div>
  );
}
