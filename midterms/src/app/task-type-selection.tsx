import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { TaskFactory } from "./task-factory";
import { type Task } from "./task-type";
import { Button } from "@/components/ui/button";

export type TaskType = "basic" | "timed" | "checklist" | null;

export const TaskTypeSelection = ({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const [taskType, setTaskType] = useState<TaskType>(null);
  return (
    <div className="px-6 my-6">
      <DropdownMenu>
        <DropdownMenuTrigger className="mb-6" asChild>
          <Button variant="outline">Select type of task</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white opacity-100 shadow-md border border-gray-200">
          <DropdownMenuLabel>Tasks</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="hover:bg-gray-100"
            onClick={() => setTaskType("basic")}
          >
            Basic Task
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-gray-100"
            onClick={() => setTaskType("checklist")}
          >
            Checklist Task
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-gray-100"
            onClick={() => setTaskType("timed")}
          >
            Timed Task
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TaskFactory type={taskType} setTasks={setTasks} />
    </div>
  );
};
