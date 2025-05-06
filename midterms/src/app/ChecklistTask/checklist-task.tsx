import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { type Task } from "../task-type";
import { useState } from "react";

export const CheckListTask = ({ task }: { task: Task }) => {
  const [check, setCheck] = useState<boolean | undefined>(task.complete); // Set initial state

  const handleUpdate = async (taskId: string, completed: boolean) => {
    // Optimistic update: immediately reflect the change in UI
    setCheck(completed);

    try {
      const response = await fetch(
        `http://localhost:3000/patch/patch-complete?id=${taskId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ complete: completed }),
        }
      );

      if (response.ok) {
        const updatedTask = await response.json();
        console.log("Updated Task:", updatedTask);
      } else {
        console.error("Failed to update task");
        // If the update fails, revert the state
        setCheck(!completed);
      }
    } catch (error) {
      console.error("Error:", error);
      // If there's an error, revert the state
      setCheck(!completed);
    }
  };

  return (
    <div>
      <Card className="flex flex-row justify-between items-center p-4 mb-4 border rounded-lg shadow-md">
        {/* Checkbox with title and description */}
        <Checkbox
          id={`task-${task.id}`}
          checked={check}
          onCheckedChange={() => handleUpdate(task.id, !check)} // Toggle between true/false
        />
        <div className="flex flex-col ml-4">
          <div className="font-bold text-lg">{task.title}</div>
          <div className="text-sm text-gray-600">{task.description}</div>
        </div>
      </Card>
    </div>
  );
};
