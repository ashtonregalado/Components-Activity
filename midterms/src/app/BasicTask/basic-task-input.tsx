import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { Task } from "../task-type";
import { taskManager } from "../task-manager";
import { v4 as uuidv4 } from "uuid";
export const BasicTaskInput = ({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = async () => {
    if (!title || !description) return;

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      complete: false,
      type: "basic",
    };

    try {
      const postData = await taskManager.postTask(newTask);

      setTasks((prev) => [...prev, postData]);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error("Error posting task", err);
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
