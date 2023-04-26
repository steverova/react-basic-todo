
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <div className="mt-4 mb-3">
      <Link className="text-decoration-none text-light" to="/" >
      <h4 className="text-center text-decoration-none">TASK APP</h4>
      </Link>
      <div>
        <Link className="btn btn-dark" to="/create-task">
          Create Task
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
