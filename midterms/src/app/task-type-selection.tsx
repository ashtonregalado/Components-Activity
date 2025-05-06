import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { TaskFactory } from "./task-manager";
import { type Task } from "./task-type";

export type TaskType = "basic" | "timed" | "checklist" | null;

export const TaskTypeSelection = ({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const [taskType, setTaskType] = useState<TaskType>(null);
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>Select type of task</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Tasks</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setTaskType("basic")}>
            Basic Task
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTaskType("checklist")}>
            Checklist Task
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTaskType("timed")}>
            Timed Task
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TaskFactory type={taskType} setTasks={setTasks} />
    </div>
  );
};
