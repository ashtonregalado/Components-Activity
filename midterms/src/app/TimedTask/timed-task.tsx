import { Card } from "@/components/ui/card";
import type { Task } from "../task-type";
import { format } from "date-fns";
import { DeleteButton } from "../delete-button";
import { Clock, AlertCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const TimedTask = ({
  task,
  onDelete,
}: {
  task: Task;
  onDelete: (id: string) => void;
}) => {
  const formattedDate = task.dueDate
    ? format(new Date(task.dueDate), "MM/dd/yyyy")
    : "";

  // Check if task is overdue
  const isOverdue = task.dueDate ? new Date(task.dueDate) < new Date() : false;

  return (
    <div>
      <Card className="relative flex flex-row justify-between items-center p-4 mb-4 border rounded-lg shadow-md">
        {task.dueDate && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-2 right-2">
                  {isOverdue ? (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  ) : (
                    <Clock className="h-5 w-5 text-blue-500" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {isOverdue ? "Overdue" : "Due"}: {formattedDate}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        <div className="flex flex-col ml-4">
          <div className="font-bold text-lg">{task.title}</div>
          <div className="text-sm text-gray-600">{task.description}</div>
          <div
            className={`text-sm ${isOverdue ? "text-red-600 font-medium" : "text-gray-600"}`}
          >
            {formattedDate} {isOverdue && "(Overdue)"}
          </div>
        </div>
        <DeleteButton taskId={task.id} onDelete={onDelete} />
      </Card>
    </div>
  );
};
