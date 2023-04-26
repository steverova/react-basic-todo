import { useEffect, useState } from "react";
import { getTaskStatus } from "../api/task.api";
import TaskCard from "./TaskCard";
import Navigation from "./Navigation";

function TaskList() {
  const [task, setTasks] = useState([]);

  useEffect(() => {
    async function loadTask() {
      const res = await getTaskStatus(1);
      setTasks(res);
    }

    loadTask();
  }, []);

  const onClick = async (tab) => {
    if (tab === 1) {
      const res = await getTaskStatus(1);
      console.log(res);
      setTasks(res);
    } else if (tab === 2) {
      const res = await getTaskStatus(2);
      console.log(res);
      setTasks(res);
    } else {
      const res = await getTaskStatus(3);
      console.log(res);
      setTasks(res);
    }
  };

  return (
    <div className="container col-sm-10 col-md-8 col-lg-6 col-xxl-4 p-2 ">
      <Navigation></Navigation>

      <div className="card">
        <div className="card-header">
          <h5 className="card-title">To Do Tasks</h5>
          <ul className="nav nav-tabs card-header-tabs" data-bs-tabs="tabs">
            <li className="nav-item">
              <a
                onClick={() => onClick(1)}
                className="nav-link active text-warning"
                aria-current="true"
                data-bs-toggle="tab"
                href="#tab_task">
                To do
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => onClick(2)}
                className="nav-link text-info"
                data-bs-toggle="tab"
                href="#tab_task">
                In Progress
              </a>
            </li>

            <li className="nav-item">
              <a
                onClick={() => onClick(3)}
                className="nav-link text-success"
                data-bs-toggle="tab"
                href="#tab_task">
                Done
              </a>
            </li>
          </ul>
        </div>
        <form className="card-body tab-content">
          <div className="tab-pane active" id="tab_task">
            {task.length > 0 ? (
              task.map((task) => (
                <>
                  <TaskCard task={task} />
                </>
              ))
            ) : (
              <div className="alert alert-dark" role="alert">
              There are no tasks for this section
            </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskList;
