/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { deleteTask } from "../api/task.api";
import Swal from "sweetalert2";

function TaskCard({ task }) {
  const navigate = useNavigate();

  const editTask = () => {
    navigate(`/create-task/${task.id}`);
  };

  const deleteT = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      icon: "warning",
      background: "#212529",
      iconColor: "white",
      confirmButtonText: "Delete",
      confirmButtonColor: "#0d6efd",
      cancelButtonColor: "#d33",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        await deleteTask(id);
        window.location.reload(false);
      }
    });
  };

  const style = {
    cursor: "pointer",
  };

  return (
    <div key={task.id} className="col-md-12 p-2">
      <div className="card">
      <div className={`card-header d-flex justify-content-between ${task.done === 1 ? "bg-todo-task" : task.done === 2 ? "bg-inprogress-task" : "bg-done-task"}`}>
          {task.title}{" "}
          {/* <div>
            <span
              onClick={editTask}
              style={style}
              className="btn btn-hover btn-sm">
              <i
                style={{ color: "#8EA7E9" }}
                className="fa-solid fa-pencil"></i>
            </span>
            <span className="ms-2 me-2 vr"></span>
            <span
              onClick={() => deleteT(task.id)}
              style={style}
              className="btn btn-hover btn-sm">
              <i
                style={{ color: "#FD8A8A" }}
                className=" fa-solid fa-trash-can"></i>
            </span>
          </div> */}
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <div className="card-body">
              <span>{task.description}</span>
            </div>
            <div className="d-flex pb-3">
              <small className="at ps-3">
                {task.created_at ? "created: " + task.created_at : ""}
              </small>
              <small className="at ps-3">
                {task.updated_at ? "updated: " + task.updated_at : ""}
              </small>
            </div>
          </div>
          <div className="d-flex flex-column p-2">
            <span
              onClick={editTask}
              style={style}
              className="mb-2 btn btn-hover btn-sm">
              <i
                style={{ color: "#8EA7E9" }}
                className="fa-solid fa-pencil"></i>
            </span>

            <span
              onClick={() => deleteT(task.id)}
              style={style}
              className="btn btn-hover btn-sm">
              <i
                style={{ color: "#FD8A8A" }}
                className=" fa-solid fa-trash-can"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
