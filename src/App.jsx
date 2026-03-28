import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([
    { name: "Jean", position: "Manager", department: "RH", status: "Actif" }
  ]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div>
      <h1>Gestion des employés</h1>

      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;