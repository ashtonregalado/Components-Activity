import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Task } from "../task-type";

export const TimedTaskInput = ({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date | undefined>();

  const handleAddTask = async () => {
    if (!title || !description || !date) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      dueDate: date.toISOString(),
      complete: false,
      type: "timed",
    };

    try {
      const response = await fetch("http://localhost:3000/post/post-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) throw new Error("Failed to add task");

      setTasks((prev) => [...prev, newTask]);
      setTitle("");
      setDescription("");
      setDate(undefined);
    } catch (err) {
      console.error("Error posting task", err);
    }
  };

  return (
    <div className="space-y-4">
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

      {/* Date Picker */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={`w-full justify-start text-left font-normal ${
              !date && "text-muted-foreground"
            }`}
          >
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Button className="w-full" onClick={handleAddTask}>
        Add Task
      </Button>
    </div>
  );
};
