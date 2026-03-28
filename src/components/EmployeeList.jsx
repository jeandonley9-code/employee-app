import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {
  return (
    <div>
      <h2>Liste des employés</h2>

      {employees.map((emp, index) => (
        <EmployeeCard key={index} employee={emp} />
      ))}
    </div>
  );
}

export default EmployeeList;