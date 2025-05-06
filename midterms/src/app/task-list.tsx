import type { Task } from "./task-type";
import { CheckListTask } from "./ChecklistTask/checklist-task";
import { BasicTask } from "./BasicTask/basic-task";
import { TimedTask } from "./TimedTask/timed-task";
export const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div>
      {tasks.map((task) => {
        if (task.type === "checklist") {
          return <CheckListTask key={task.id} task={task} />;
        }
        if (task.type === "basic") {
          return <BasicTask key={task.id} task={task} />;
        }
        if (task.type === "timed") {
          return <TimedTask key={task.id} task={task} />;
        }
        // explicitly return null for non-checklist tasks
      })}
    </div>
  );
};
