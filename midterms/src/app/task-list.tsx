import type { Task } from "./task-type";
import { CheckListTask } from "./ChecklistTask/checklist-task";
import { BasicTask } from "./BasicTask/basic-task";
import { TimedTask } from "./TimedTask/timed-task";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { TaskSortingStrategy } from "./task-sorting-strategy";
import { useState } from "react";

export const TaskList = ({
  tasks,
  setTasks,
}: {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const [sortBy, setSortBy] = useState<string>("");
  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const getSortedTasks = () => {
    if (sortBy === "default") return tasks;
    if (sortBy === "dueDate") return TaskSortingStrategy.sortByDate(tasks);
    if (sortBy === "name") return TaskSortingStrategy.sortByName(tasks);
    if (sortBy === "id") return TaskSortingStrategy.sortById(tasks);
    return tasks;
  };

  const sortedTasks = getSortedTasks();

  return (
    <div className="mb-6">
      {/* UI-Only Filter Dropdown */}
      <div className="mb-4 flex items-center gap-4">
        <Label htmlFor="task-filter">Sort by:</Label>
        <Select onValueChange={(value) => setSortBy(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select task type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="dueDate">Due Date</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="id">Id</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {sortedTasks.map((task: Task) => {
        if (task.type === "checklist") {
          return (
            <CheckListTask key={task.id} task={task} onDelete={handleDelete} />
          );
        }
        if (task.type === "basic") {
          return (
            <BasicTask key={task.id} task={task} onDelete={handleDelete} />
          );
        }
        if (task.type === "timed") {
          return (
            <TimedTask key={task.id} task={task} onDelete={handleDelete} />
          );
        }
        return null;
      })}
    </div>
  );
};
