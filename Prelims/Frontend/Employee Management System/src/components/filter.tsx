import React, { useState, useEffect } from "react";
import Employee from "./employee";

const FilterBySalary: React.FC<{ employees: Employee[] }> = ({ employees }) => {
  const [senior, setSenior] = useState<Employee[]>([]);
  const [junior, setJunior] = useState<Employee[]>([]);

  useEffect(() => {
    const seniorEmployees = employees.filter(
      (employee) => employee.salary > 50000
    );
    const juniorEmployees = employees.filter(
      (employee) => employee.salary < 50000
    );

    setSenior(seniorEmployees);
    setJunior(juniorEmployees);
  }, [employees]);

  return (
    <div>
      <h3>Senior</h3>
      <ul>
        {senior.map((employee) => (
          <li key={employee.id}>
            <h5>{employee.name}</h5>
            <div>Role: {employee.role}</div>
            <div>Salary: {employee.salary}</div>
          </li>
        ))}
      </ul>

      <h3>Junior Level</h3>
      <ul>
        {junior.map((employee) => (
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

export default FilterBySalary;
