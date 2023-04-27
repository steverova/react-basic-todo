import { useForm } from "react-hook-form";
import { createTask, updateTask, getTask } from "../api/task.api";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Footer from "../components/footer";
// import reactlogo from "../images/react.svg"
// import djangologo from "../images/django.svg"
export function TaskhtmlFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const getDate = () => {
    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateTime = `${date} ${time}`;
    return dateTime;
  };
  

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const updateOrCreateTask = async (id, data) => {
    if (id) {
      data.updated_at = getDate();
      await updateTask(id, data);
      toast.success("Task update successfull", {
        position: "bottom-center",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      data.created_at = getDate();
      await createTask(data);
      toast.success("Task create successfull", {
        position: "bottom-center",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/");
  };
  
  const onSubmit = handleSubmit(async (data) => {
    await updateOrCreateTask(id, data);
  });
  
  useEffect(() => {
    async function loadTask() {
      if (id) {
        const res = await getTask(id);
        console.log(res);
        setValue("title", res[0].title);
        setValue("description", res[0].description);
        setValue("done", res[0].done);
      }
    }
    loadTask();
  }, [id, setValue]);

  return (
    <>
      <div className="container-fluid">
        <Link className="text-decoration-none text-light" to="/">
          <h1 className="text-center text-decoration-none mt-4">TASK APP</h1>
        </Link>
        <form className="col-md-4 mx-auto" onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              {...register("title", { required: true })}
              placeholder="Research about supabase ..."
              type="text"
              className="form-control mb-2"
            />
            {errors.title && (
              <span className="text-warning">This field is requiered!!</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Research and implements a example to create and use supabase..."
              {...register("description", { required: true })}
              type="text"
              className="form-control mb-2"
            />
            {errors.description && (
              <span className="text-warning">This field is requiered!!</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              {...register("done")}
              className="form-select form-select-lg"
              defaultValue={1}>
              <option key={1} value={1}>
                To-do
              </option>
              <option key={2} value={2}>
                In Progress
              </option>
              <option key={3} value={3}>
                Done
              </option>
            </select>
          </div>

          <button type="submit" className="btn btn-dark">
            Submit
          </button>

          <div className="mt-3">
            <button onClick={() => navigate("/")} className="btn btn-dark">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </>
  );
}

export default TaskhtmlFormPage;
