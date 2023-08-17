import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import { QUERY_MATCHUPS } from '../utils/queries';
import Auth from "../utils/auth";

const token = Auth.getToken();

console.log(token);

export default function Home() {
  return (
    <><div className="card bg-white card-rounded w-50">
      <div>WELCOME HOME</div>
      <div>
          {Auth.loggedIn() ? (
            <button className="btn btn-lg btn-light m-2" onClick={Auth.logout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
    </div><div className="card bg-white card-rounded w-50">
        <Link to="/Login">
          <button className="btn btn-lg btn-danger">Login</button>
        </Link>
      </div><div className="card bg-white card-rounded w-50">
        <Link to="/NextPage">
          <button className="btn btn-lg btn-danger">To Next Page</button>
        </Link>
      </div><div className="card bg-white card-rounded w-50">
        <Link to="/UserProfile">
          <button className="btn btn-lg btn-danger">User Profile Page</button>
        </Link>
      </div></>
  );
}

  
        