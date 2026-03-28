function EmployeeCard({ employee }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{employee.name}</h3>
      <p>Poste: {employee.position}</p>
      <p>Département: {employee.department}</p>
      <p>Status: {employee.status}</p>
    </div>
  );
}

export default EmployeeCard;