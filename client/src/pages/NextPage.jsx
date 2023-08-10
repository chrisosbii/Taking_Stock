import { Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { GET_USERS } from '../utils/queries';
import { ADD_USER } from "../utils/mutations";

export default function Home() {

  const { loading, error, data } = useQuery(GET_USERS);
  const [addUser] = useMutation(ADD_USER);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error)
    return <p>Error</p>;
  }

  return (
    <div className="card bg-white card-rounded w-50">

      <div>WELCOME TO NEXT PAGE</div>
      <Link to="/">
        <button className="btn btn-lg btn-danger">Back Home</button>
      </Link>


      <div>
      <h2>Users</h2>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>
            {user.username} ({user.email})
          </li>
        ))}
      </ul>
      <button onClick={() => addUser({ variables: { username: 'newuser', email: 'newuser@example.com' } })}>
        Add User
      </button>
    </div>



    </div>
  );
}
