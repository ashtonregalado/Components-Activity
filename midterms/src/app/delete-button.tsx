import { Button } from "@/components/ui/button";
import { taskManager } from "./task-manager";
import { Trash2 } from "lucide-react";

interface DeleteButtonProps {
  taskId: string;
  onDelete: (deletedId: string) => void;
}

export const DeleteButton = ({ taskId, onDelete }: DeleteButtonProps) => {
  const handleDelete = async () => {
    try {
      const response = await taskManager.deleteTask(taskId);
      onDelete(taskId);
      console.log(response);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <Button
      variant="destructive"
      onClick={handleDelete}
      className="ml-2 flex items-center gap-1 text-black"
    >
      <Trash2 size={16} />
      Delete
    </Button>
  );
};
