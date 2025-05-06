import { useEffect, useState } from "react";
import { TaskList } from "./task-list";
import { TaskTypeSelection } from "./task-type-selection";
import type { Task } from "./task-type";
export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Store tasks here
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/get/get-task");
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await response.json();
        setTasks(data); // Set fetched tasks
      } catch (error) {
        setError("Error fetching tasks: " + error); // Handle error
      }
    };

    getTasks(); // Call the async function
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div>
      <TaskTypeSelection setTasks={setTasks} />
      {error && <div>Error: {error}</div>} {/* Display error if any */}
      <TaskList tasks={tasks} />
    </div>
  );
};
