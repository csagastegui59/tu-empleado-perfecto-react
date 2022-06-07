import React, { useState } from "react";

export function CreateCompanyForm() {
  const [name, setName] = useState("");
  const [rut, setRut] = useState("");
  const [address, setAddress] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState(false);
  const baseURL = "http://localhost:3000";

  function createPostCompany(event) {
    setError(false);
    setSubmited(false);
    event.preventDefault();
    fetch(baseURL + "/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        rut,
        telephoneNumber,
        address,
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
        onSubmit={createPostCompany}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Nombre de compañía:
            <input
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              id="name"
              value={name}
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
            for="address"
          >
            Dirección:
            <input
              onChange={(e) => setAddress(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="address"
              value={address}
              id="address"
            />
          </label>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="telephoneNumber"
          >
            Número de teléfono:
            <input
              onChange={(e) => setTelephoneNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="telephoneNumber"
              value={telephoneNumber}
              id="telephoneNumber"
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
        {error ? (
          <p className="text-red-500">Debes llenar todos los campos</p>
        ) : null}
        {submited ? (
          <p className="text-green-500">Compañía {name} creada exitosamente</p>
        ) : null}
      </form>
    </div>
  );
}
