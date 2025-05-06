import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { Task } from "../task-type";

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
      id: Date.now().toString(),
      title,
      description,
      complete: false,
      type: "basic",
    };

    try {
      const response = await fetch("http://localhost:3000/post/post-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) throw new Error("Failed to add task");

      setTasks((prev) => [...prev, newTask]); // Update local task state
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
