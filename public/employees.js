const employees = [{
  firstName: "John",
  lastName: "Doe"
}, {
  firstName: "Jane",
  lastName: "Smith"
}, {
  firstName: "Bob",
  lastName: "Johnson"
}, {
  firstName: "Alice",
  lastName: "Brown"
}];
function EmployeeList() {
  return /*#__PURE__*/React.createElement("ul", null, employees.map((emp, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, emp.firstName, " ", emp.lastName)));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(EmployeeList, null));
