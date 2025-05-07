import { Card } from "@/components/ui/card";
import { type Task } from "../task-type";
import { DeleteButton } from "../delete-button";
export const BasicTask = ({
  task,
  onDelete,
}: {
  task: Task;
  onDelete: (id: string) => void;
}) => {
  return (
    <div>
      <Card className="flex flex-row justify-between items-center p-4 mb-4 border rounded-lg shadow-md">
        {/* Checkbox with title and description */}
        <div className="flex flex-col ml-4">
          <div className="font-bold text-lg">{task.title}</div>
          <div className="text-sm text-gray-600">{task.description}</div>
        </div>
        <DeleteButton taskId={task.id} onDelete={onDelete}></DeleteButton>
      </Card>
    </div>
  );
};
