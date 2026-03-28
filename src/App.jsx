import { useState } from "react";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees] = useState([
    { name: "Jean", position: "Manager", department: "RH", status: "Actif" },
    { name: "Marie", position: "Dev", department: "IT", status: "Actif" }
  ]);

  return (
    <div>
      <h1>Gestion des employés</h1>
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;