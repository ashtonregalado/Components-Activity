import { Card } from "@/components/ui/card";
import { type Task } from "../task-type";
import { format } from "date-fns";

export const TimedTask = ({ task }: { task: Task }) => {
  const formattedDate = task.dueDate
    ? format(new Date(task.dueDate), "MM/dd/yyyy")
    : "";

  return (
    <div>
      <Card className="flex flex-row justify-between items-center p-4 mb-4 border rounded-lg shadow-md">
        <div className="flex flex-col ml-4">
          <div className="font-bold text-lg">{task.title}</div>
          <div className="text-sm text-gray-600">{task.description}</div>
          <div className="text-sm text-gray-600">{formattedDate}</div>
        </div>
      </Card>
    </div>
  );
};
