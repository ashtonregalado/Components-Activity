"use client";
import React, { useState } from "react";
import AddButton from "../Buttons/addButton";

interface FormDataProps {
  firstName: string;
  lastName: string;
  groupName: string;
  role: string;
  expectedSalary: string;
  expectedDateOfDefense: string;
}

const InputForm: React.FC = () => {
  const [form, setForm] = useState<FormDataProps>({
    firstName: "",
    lastName: "",
    groupName: "",
    role: "",
    expectedSalary: "",
    expectedDateOfDefense: "",
  });

  const formSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/post/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);

      setForm({
        firstName: "",
        lastName: "",
        groupName: "",
        role: "",
        expectedSalary: "",
        expectedDateOfDefense: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center rounded-lg shadow-lg p-6 w-full max-w-lg">
      <h3 className="text-blue-950 text-2xl font-sans font-semibold mb-5">
        FILL UP FORM
      </h3>

      <form onSubmit={formSubmit}>
        <div>
          <p className="text-blue-950 text-base font-sans font-medium mb-1">
            First Name
          </p>
          <input
            className="bg-white border-1 border-gray-300 text-black text-sm mb-5 pl-3 w-80 h-8 rounded-sm"
            type="text"
            value={form.firstName}
            placeholder="Enter your first name"
            onChange={(e) =>
              setForm((prevForm) => ({
                ...prevForm,
                firstName: e.target.value,
              }))
            }
          ></input>
        </div>

        <div>
          <p className="text-blue-950 text-base font-sans font-medium mb-1">
            Last Name
          </p>
          <input
            className="bg-white border-1 border-gray-300 text-black text-sm mb-5 pl-3 w-80 h-8 rounded-sm"
            type="text"
            value={form.lastName}
            placeholder="Enter your last name"
            onChange={(e) =>
              setForm((prevForm) => ({
                ...prevForm,
                lastname: e.target.value,
              }))
            }
          ></input>
        </div>

        <div>
          <p className="text-blue-950 text-base font-sans font-medium mb-1">
            Group Name
          </p>
          <input
            className="bg-white border-1 border-gray-300 text-black text-sm mb-5 pl-3 w-80 h-8 rounded-sm"
            type="text"
            value={form.groupName}
            placeholder="Enter your group name"
            onChange={(e) =>
              setForm((prevForm) => ({
                ...prevForm,
                groupName: e.target.value,
              }))
            }
          ></input>
        </div>

        <div>
          <p className="text-blue-950 text-base font-sans font-medium mb-1">
            Role
          </p>
          <input
            className="bg-white border-1 border-gray-300 text-black text-sm mb-5 pl-3 w-80 h-8 rounded-sm"
            type="text"
            value={form.role}
            placeholder="Enter your role"
            onChange={(e) =>
              setForm((prevForm) => ({
                ...prevForm,
                role: e.target.value,
              }))
            }
          ></input>
        </div>

        <div>
          <p className="text-blue-950 text-base font-sans font-medium mb-1">
            Expected Salary
          </p>
          <input
            className="bg-white border-1 border-gray-300 text-black text-sm mb-5 pl-3 w-80 h-8 rounded-sm"
            type="text"
            value={form.expectedSalary}
            placeholder="Enter your expected salary"
            onChange={(e) =>
              setForm((prevForm) => ({
                ...prevForm,
                expectedSalary: e.target.value,
              }))
            }
          ></input>
        </div>

        <div>
          <p className="text-blue-950 text-base font-sans font-medium mb-1">
            Expected Date of Defense
          </p>
          <input
            className="bg-white border-1 border-gray-300 text-black text-sm mb-5 pl-3 w-80 h-8 rounded-sm"
            type="text"
            value={form.expectedDateOfDefense}
            placeholder="Enter your expected date of defense"
            onChange={(e) =>
              setForm((prevForm) => ({
                ...prevForm,
                expectedDateOfDefense: e.target.value,
              }))
            }
          ></input>
        </div>

        <AddButton />
      </form>
    </div>
  );
};

export default InputForm;
