import { useEffect, useState } from "react";
import { getAllTask } from "../api/task.api";
import TaskCard from "./TaskCard";

function TaskList() {
  const [task, setTasks] = useState([]);

  useEffect(() => {
    async function loadTask() {
      const res = await getAllTask();
      setTasks(res.data);
    }

    loadTask();
  }, []);

  return (
    <div className="p-3 d-flex flex-wrap">
      {task.map((task) => (
        <>
        <TaskCard task={task}/>
        </>
      ))}
    </div>
  );
}

export default TaskList;
