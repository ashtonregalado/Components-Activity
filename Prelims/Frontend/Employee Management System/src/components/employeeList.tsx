import React, { useEffect, useState } from "react";
import Employee from "./employee";
import FilterBySalary from "./filter";

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [buttonState, setButtonState] = useState(false);
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const employee = await fetch(`http://localhost:3000/get/all`);
        const data = await employee.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching Employee:", error);
      }
    };

    fetchEmployee();
  }, []);

  return (
    <div>
      <h1>Employee Management System</h1>
      <h4>Filter By:</h4>
      <button onClick={() => setButtonState(!buttonState)}>
        Toggle Salary Filter
      </button>

      {/* Show FilterBySalary only when the button is clicked */}
      {buttonState && <FilterBySalary employees={employees} />}
      <ul>
        {!buttonState &&
          employees.map((employee) => (
            <li key={employee.id}>
              <h5>{employee.name}</h5>
              <div>Role: {employee.role}</div>
              <div>Salary: {employee.salary}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
