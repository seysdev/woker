import { useState } from "react";
import { AuthUser, AuthProfesional } from "../../modules/auth";

export function PageHome() {
  const [formSelected, setFormSelected] = useState("user");

  return (
    <div className="page-home">
      <button onClick={() => setFormSelected("user")}>USUARIO</button>
      <button onClick={() => setFormSelected("profesional")}>ABOGADO</button>

      {formSelected === "user" ? <AuthUser /> : <AuthProfesional />}
    </div>
  );
}
