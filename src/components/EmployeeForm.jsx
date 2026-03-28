import { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [form, setForm] = useState({
    name: "",
    position: "",
    department: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEmployee({
      ...form,
      status: "Actif"
    });

    setForm({ name: "", position: "", department: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nom" value={form.name} onChange={handleChange} />
      <input name="position" placeholder="Poste" value={form.position} onChange={handleChange} />
      <input name="department" placeholder="Département" value={form.department} onChange={handleChange} />

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default EmployeeForm;