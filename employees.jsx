const employees = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Bob", lastName: "Johnson" },
  { firstName: "Alice", lastName: "Brown" },
];

function EmployeeList() {
  return (
    <ul>
      {employees.map((emp, index) => (
        <li key={index}>
          {emp.firstName} {emp.lastName}
        </li>
      ))}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EmployeeList />);
