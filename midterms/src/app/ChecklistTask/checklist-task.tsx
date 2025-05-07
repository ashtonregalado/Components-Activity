import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { type Task } from "../task-type";
import { useState } from "react";
import { DeleteButton } from "../delete-button";
import { taskManager } from "../task-manager";

export const CheckListTask = ({
  task,
  onDelete,
}: {
  task: Task;
  onDelete: (id: string) => void;
}) => {
  const [check, setCheck] = useState<boolean | undefined>(task.complete);

  const handleUpdate = async (taskId: string, completed: boolean) => {
    setCheck(completed);

    try {
      const updatedTask = await taskManager.patchComplete(taskId, completed);
      console.log("Updated Task:", updatedTask);
    } catch (error) {
      console.error("Error:", error);
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
          onCheckedChange={() => handleUpdate(task.id, !check)}
        />
        <div className="flex flex-col ml-4">
          <div className="font-bold text-lg">{task.title}</div>
          <div className="text-sm text-gray-600">{task.description}</div>
        </div>
        <DeleteButton taskId={task.id} onDelete={onDelete}></DeleteButton>
      </Card>
    </div>
  );
};
