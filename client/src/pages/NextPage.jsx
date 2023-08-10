import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import { QUERY_MATCHUPS } from '../utils/queries';

export default function Home() {
  return (
    <div className="card bg-white card-rounded w-50">
      <div>WELCOME TO NEXT PAGE</div>
      <Link to="/">
          <button className="btn btn-lg btn-danger">Back Home</button>
        </Link>
    </div>
  );
}
