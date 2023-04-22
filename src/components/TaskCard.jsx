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
      icon: 'warning',
      background: '#212529',
      iconColor: 'white',
      confirmButtonText: "Save",
      confirmButtonColor: '#0d6efd',
      cancelButtonColor: '#d33',
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        await deleteTask(id);
        navigate(`/tasks`);
      } 
    });
  };

  const style = {
    cursor: "pointer",
  };

  return (
    <div key={task.id} className="col-md-4 p-2">
      <div className="card">
        <div className="card-header d-flex justify-content-between ">
          {task.title}{" "}
          <div>
            <span
              onClick={editTask}
              style={style}
              className=" ms-3 rounded-pill badge bg-primary">
              Editar
            </span>
            <span
              onClick={() => deleteT(task.id)}
              style={style}
              className="ms-3  rounded-pill badge bg-danger">
              Eliminar
            </span>

            <div className="ms-3 vr"></div>

            <span
              className={` ms-3 badge rounded-pill text-bg-${
                task.done ? "success" : "warning"
              }`}>
              {task.done ? "done" : "in-process"}
            </span>
          </div>
        </div>

        <div className="card-body">
          <span>{task.description}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
