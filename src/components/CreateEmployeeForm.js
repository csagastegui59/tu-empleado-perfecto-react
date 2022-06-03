import axios from "axios";
import React from "react";

export function CreateEmployeeForm({ ...props }) {
  const baseURL = "http://localhost:3001";
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
    <>
      <form onSubmit={createPostEmployee}>
        <label>
          Nombre de empleado:
          <input type="text" name="name" value={props.name} />
        </label>
        <label>
          email:
          <input type="text" name="name" value={props.email} />
        </label>
        <label>
          Rut:
          <input type="text" name="name" value={props.rut} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}
