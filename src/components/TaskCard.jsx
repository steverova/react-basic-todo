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
        <div className="card-header d-flex justify-content-between ">
          {task.title}{" "}
          <div>
            <span
              onClick={editTask}
              style={style}
              className=" ms-3  btn bg-primary-subtle btn-sm">
              <i className="fa-solid fa-pen"></i>
            </span>
            <span
              onClick={() => deleteT(task.id)}
              style={style}
              className="ms-3 btn bg-danger-subtle btn-sm">
              <i className="fa-solid fa-trash"></i>
            </span>
          </div>
        </div>

        <div className="card-body">
          <span>{task.description}</span>
        </div>
        
        <div className="d-flex pb-3">
          <small className="at ps-3" >{task.created_at ? "created: "+task.created_at : ""}</small>
          <small className="at ps-3" >{task.updated_at ? "updated: "+task.updated_at : ""}</small>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
