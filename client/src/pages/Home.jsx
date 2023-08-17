import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import { QUERY_MATCHUPS } from '../utils/queries';
import Auth from "../utils/auth";

const token = Auth.getToken();

console.log(token);

export default function Home() {
  return (
    <div className="card bg-white card-rounded w-50">
      <div>WELCOME HOME</div>
      {Auth.loggedIn() ? (
        <>
          <button onClick={Auth.logout}>Log out</button>
          <Link to="/NextPage">
            <button className="btn btn-lg btn-danger">To Next Page</button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/Login">
            <button className="btn btn-lg btn-danger">Login</button>
          </Link>
          <Link to="/SignUp">
            <button className="btn btn-lg btn-danger">SignUp</button>
          </Link>
        </>
      )}
    </div>
  );
}
