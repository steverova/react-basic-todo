
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="mt-4">
      <Link className="text-decoration-none text-light" to="/" >
      <h1 className="text-center text-decoration-none">TASK APP</h1>
      </Link>
      <div className="ps-3">
        <Link className="btn btn-primary" to="/create-task">
          Create Task
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
