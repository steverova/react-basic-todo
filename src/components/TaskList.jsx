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
    <>
      <div className="container col-sm-10 col-md-8 col-lg-8 col-xxl-6 p-2 mb-3">
        <Navigation></Navigation>
        <div className="card">
          <div className="card-header">
            <h5 className="card-title ">To Do Tasks</h5>
            <ul className="nav nav-tabs card-header-tabs " data-bs-tabs="tabs">
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
          <div style={{height: '700px', overflowY: "scroll"}} className="card-body tab-content">
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
          </div>
        </div>
      </div>

      <footer className="mt-5 py-3 text-center">
        <div className="container-fluid position-absolute bottom-0 d-flex justify-content-between border-top">
          <div className="p-3 ">
            Developed with:
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
            <a
              href="https://es.react.dev/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="ms-3"
                style={{ width: "25px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt=""
              />
            </a>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="ms-3"
                style={{ width: "25px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                alt=""
              />
            </a>
            <a
              href="https://supabase.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="ms-3"
                style={{ width: "20px" }}
                src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
                alt=""
              />
            </a>
          </div>
          <div className="p-3">
            <a
              className="text-decoration-none"
              href="https://github.com/steverova"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="ms-3"
                style={{ width: "20px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg"
                alt=""
              />
              <span className="ms-3 text-white">Steverova</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default TaskList;
