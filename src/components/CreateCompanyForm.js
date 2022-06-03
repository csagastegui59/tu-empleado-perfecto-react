import axios from "axios";
import React from "react";

export function CreateCompanyForm({ ...props }) {
  const baseURL = "http://localhost:3001";
  function createPostCompany(event) {
    event.preventDefault();
    fetch(
      baseURL + "/companies",
      { mode: "cors" },
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: {
          name: "EOO",
          rut: "rut",
          telephoneNumber: "1235896",
          address: "hola",
        },
      }
    )
      .then((response) => response)
      //Then with the data from the response in JSON...
      .then((data) => {});
  }

  function createPostEmployee() {
    axios
      .post(baseURL + "/companies/:companyId", {
        name: { ...props.name },
        email: { ...props.email },
        rut: { ...props.rut },
        id: { ...props.id },
        companyId: { ...props.companyId },
      })
      .then((response) => {});
  }

  return (
    <form onSubmit={createPostCompany}>
      <>
        <label>
          Nombre de compañía:
          <input type="text" name="name" value={props.name} />
        </label>
        <label>
          Número de Rut:
          <input type="text" name="name" value={props.rut} />
        </label>
        <label>
          Numero de teléfono:
          <input type="text" name="name" value={props.telephoneNumber} />
        </label>
        <label>
          Dirección:
          <input type="text" name="name" value={props.address} />
        </label>
      </>
      <input type="submit" value="Enviar" />
    </form>
  );
}
