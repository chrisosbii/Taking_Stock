import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import { QUERY_MATCHUPS } from '../utils/queries';

export default function Home() {
  return (
    <div className="card bg-white card-rounded w-50">
      <div>WELCOME HOME</div>
      <Link to="/Login">
        <button className="btn btn-lg btn-danger">Login</button>
      </Link>
      <Link to="/UserProfile">
        <button className="btn btn-lg btn-danger">Profile</button>
      </Link>
      <Link to="/Stocks">
        <button className="btn btn-lg btn-danger">Stocks</button>
      </Link>
    </div>
  );
}
