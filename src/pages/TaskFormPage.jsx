import { useForm } from "react-hook-form";
import { createTask, updateTask, getTask } from "../api/task.api";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
// import reactlogo from "../images/react.svg"
// import djangologo from "../images/django.svg"
export function TaskhtmlFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    
      formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (id) {
      await updateTask(id, data);
      toast.success('Task update successfull', {
        position: "top-right",
        style: {
            background: "#101010",
            color: '#fff'
        }
      });
    } else {
      await createTask(data);
      toast.success('Task create successfull', {
        position: "top-right",
        style: {
            background: "#101010",
            color: '#fff'
        }
      });
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (id) {
        const res = await getTask(id);
        setValue('title',res.data.title);
        setValue('description',res.data.description);
        setValue('done', res.data.done);
      }
    }
    loadTask();
  }, []);



  return (
    <>
      <div className="container-fluid">
      <Link className="text-decoration-none text-light" to="/" >
      <h1 className="text-center text-decoration-none mt-4">TASK APP</h1>
      </Link>
        <form className="col-md-4 mx-auto" onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.title && <span>This field is requiered</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Description
            </label>
            <textarea
              {...register("description", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.description && <span>This field is requiered</span>}
          </div>

          <div className="form-check mb-3">
            <input
              {...register("done")}
              className="form-check-input"
              type="checkbox"
            />
            <label className="form-check-label">done</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskhtmlFormPage;
