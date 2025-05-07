import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { Task } from "../task-type";
import { taskManager } from "../task-manager";

export const CheckListTaskInput = ({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = async () => {
    if (!title || !description) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      complete: false,
      type: "checklist",
    };

    try {
      const postData = await taskManager.postTask(newTask);

      setTasks((prev) => [...prev, postData]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  return (
    <div>
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={handleAddTask}>Add Task</Button>
    </div>
  );
};
