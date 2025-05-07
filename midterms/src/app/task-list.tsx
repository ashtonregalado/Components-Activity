import type { Task } from "./task-type";
import { CheckListTask } from "./ChecklistTask/checklist-task";
import { BasicTask } from "./BasicTask/basic-task";
import { TimedTask } from "./TimedTask/timed-task";
export const TaskList = ({
  tasks,
  setTasks,
}: {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div>
      {tasks.map((task) => {
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
